import './CapaImagem.css';
import { useState, useRef } from 'react';

export default function CapaImagem({ isEditando }) {
  const [imagem, setImagem] = useState(null); 
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const inputRef = useRef();

  function trocarImagem(e) {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      setImagem(url);
      setMostrarBotoes(false);
    }
  }

  function removerImagem() {
    setImagem(null);
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
        className={`capa-fundo ${imagem ? 'com-imagem' : ''}`}
        onClick={clicarNaArea}
        style={{ backgroundImage: imagem ? `url(${imagem})` : 'none' }}
      >
        {!imagem && isEditando && (
          <p className="texto-editar">clique aqui para editar</p>
        )}

        {isEditando && mostrarBotoes && (
          <div className="botoes-capa">
            {imagem && <button>Mostrar foto</button>}
            <button onClick={abrirInput}>Carregar Foto</button>
            {imagem && <button onClick={removerImagem}>Remover foto</button>}
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
