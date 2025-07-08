import './FotoPerfil.css';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function FotoPerfil({ isEditando, urlFoto, setDadosTemporarios }) {
  //const [foto, setFoto] = useState(null);
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const inputRef = useRef();

  async function trocarFoto(e) {
  const arquivo = e.target.files[0];
  if (!arquivo) return;

  setCarregando(true);

  const formData = new FormData();
  formData.append('file', arquivo);
  formData.append('upload_preset', 'img-confeiteiro');
  formData.append('folder', 'confeiteiro');


  try {
    const resposta = await axios.post(
      'https://api.cloudinary.com/v1_1/dqmp5gzbg/image/upload',
      formData
    );

    const url = resposta.data.secure_url;

    setDadosTemporarios(dadosAnteriores => ({
      ...dadosAnteriores,
      urlFotoPerfil: url
    }));

  } catch (erro) {
    alert('Erro ao enviar imagem');
    console.error(erro);
  }

  setCarregando(false);
  setMostrarBotoes(false);
}


  function removerFoto() {
    setDadosTemporarios(dadosAnteriores => ({
      ...dadosAnteriores,
      urlFotoPerfil: ''
    }));
    setMostrarBotoes(false);
  }

  function clicarNaFoto() {
    if (isEditando) {
      setMostrarBotoes(prev => !prev);
    }
  }

  function abrirInput() {
    inputRef.current.click();
  }

  return (
    <div className="foto-perfil-wrapper">
      <div
        className={`foto-perfil ${urlFoto ? 'com-foto' : ''}`}
        onClick={clicarNaFoto}
        style={{ backgroundImage: urlFoto ? `url(${urlFoto})` : 'none'}}
      >
        {!urlFoto && isEditando && (
          <span className="texto-editar">clique aqui para editar</span>
        )}

        {!isEditando && urlFoto && (
          <img src={urlFoto} alt="Foto do perfil" className="img-perfil" />
        )}

        {isEditando && mostrarBotoes && (
          <div className="botoes-foto">
            <button onClick={abrirInput} disabled={carregando}>
              {carregando ? "Enviando..." : "Carregar Foto"}
            </button>
            {urlFoto && <button onClick={removerFoto}>Remover foto</button>}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={trocarFoto}
              style={{ display: 'none' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}