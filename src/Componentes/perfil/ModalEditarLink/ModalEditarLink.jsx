import { useState } from "react";
import "./ModalEditarLink.css";

export default function ModalEditarLink({ tipo, linkAtual, textoAtual, onClose, onSave }) {
  const [link, setLink] = useState(linkAtual || "");
  const [texto, setTexto] = useState(textoAtual || "");

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <h3>Editar {tipo}</h3>
        <label>Link</label>
        <input
          type="text"
          placeholder={`Digite ou cole seu link do ${tipo}`}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label>Texto do Botão</label>
        <input
          type="text"
          placeholder="Edite o texto que vai aparecer em seu botão"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <div className="botoes-modal">
          <button className="botao-cancelar" onClick={onClose}>Cancelar</button>
          <button
            className="botao-salvar"
            onClick={() => {
              onSave({ link, texto });
              onClose();
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
