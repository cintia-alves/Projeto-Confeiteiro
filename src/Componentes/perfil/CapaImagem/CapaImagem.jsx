import { FaEdit } from 'react-icons/fa';
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
        style={{ backgroundImage: imagem ? `url(${imagem})` : 'none' }}
      >
        {isEditando && (
          <FaEdit onClick={clicarNaArea} className='edit-icon' size={16} />
        )}

        {isEditando && mostrarBotoes && (
          <div className="botoes-capa">
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
