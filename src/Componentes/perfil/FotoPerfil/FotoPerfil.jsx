import './FotoPerfil.css';
import { useState, useRef } from 'react';

export default function FotoPerfil({ isEditando }) {
  const [foto, setFoto] = useState(null);
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const inputRef = useRef();

  function trocarFoto(e) {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      setFoto(url);
      setMostrarBotoes(false);
    }
  }

  function removerFoto() {
    setFoto(null);
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
        className={`foto-perfil ${foto ? 'com-foto' : ''}`}
        onClick={clicarNaFoto}
        style={{ backgroundImage: foto ? `url(${foto})` : 'none' }}
      >
        {!foto && isEditando && (
          <span className="texto-editar">clique aqui para editar</span>
        )}

        {isEditando && mostrarBotoes && (
          <div className="botoes-foto">
            {foto && <button>Mostrar foto</button>}
            <button onClick={abrirInput}>Carregar Foto</button>
            {foto && <button onClick={removerFoto}>Remover foto</button>}
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
