import { FaEdit } from 'react-icons/fa';
import './CapaImagem.css';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function CapaImagem({ isEditando, urlImagem, setDadosTemporarios}) {
  //const [imagem, setImagem] = useState(null); 
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const inputRef = useRef();

  async function trocarImagem(e) {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    setCarregando(true);

    const formData = new FormData();
    formData.append('file', arquivo);
    formData.append('upload_preset', 'img-confeiteiro')
    formData.append('folder', 'confeiteiro');

    try {
      const resposta = await axios.post(
        'https://api.cloudinary.com/v1_1/dqmp5gzbg/image/upload',
        formData
      );

      const url = resposta.data.secure_url;

      setDadosTemporarios(dadosAnteriores =>({
        ...dadosAnteriores,
        urlCapa: url
      }));
    } catch (erro) {
      alert('Erro ao enviar imagem');
      console.error(erro);
    }

    setCarregando(false);
    setMostrarBotoes(false);
  }

  function removerImagem() {
  setDadosTemporarios(dadosAnteriores => ({
    ...dadosAnteriores,
    urlCapa: '' 
  }));
  setMostrarBotoes(false);
}


  function clicarNaArea() {
    if (isEditando) {
      setMostrarBotoes((prev) => !prev);
    }
  }

  function abrirInput() {
    inputRef.current.click();
  }

  return (
    <div className="capa-wrapper">
      <div
        className={`capa-fundo ${urlImagem ? 'com-imagem' : ''}`}
        onClick={clicarNaArea}
        style={{ backgroundImage: urlImagem ? `url(${urlImagem})` : 'none' }}
      >
        {!urlImagem && isEditando && (
          <span className="texto-editar">clique aqui para editar</span>
        )}

        {isEditando && mostrarBotoes && (
          <div className="botoes-capa">
            <button onClick={abrirInput} disabled={carregando}>
              {carregando ? "Enviando..." : "Carregar Foto"}
            </button>
            {urlImagem && <button onClick={removerImagem}>Remover foto</button>}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={trocarImagem}
              style={{ display: 'none' }}
            />
          </div>
        )}
      </div>

    </div>
  );
}
