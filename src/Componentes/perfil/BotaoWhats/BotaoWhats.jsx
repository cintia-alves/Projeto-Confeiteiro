import { useState } from "react";
import "./BotaoWhats.css";
import { FaWhatsapp } from "react-icons/fa";
import ModalEditarLink from "../ModalEditarLink/ModalEditarLink";

export default function BotaoWhats({ isEditando,botao, onChange }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  //const [link, setLink] = useState("");
  //const [texto, setTexto] = useState("WhatsApp");
  const link = botao?.link || "";
  const texto = botao?.texto || "WhatsApp";
  return (
    <div className={`${link ? "div-botao-whats" : "div-botao-whats-disabled"}`}>
      <a href={link} target="_blank">
        <button className={`botao-whats largura-total ${link ? "" : "botao-desativado"}`} disabled={link ? false : true}>
          <FaWhatsapp className="icone-whats" />
          {texto}
        </button>
      </a>
      {isEditando && (
        <div className="botao-whats-acoes">
          <button className="botao-acao" onClick={() => setMostrarModal(true)}>Editar</button>
          <button className="botao-acao" onClick={() => onChange({ link: "", texto })}>Excluir</button>
        </div>
      )}

      {mostrarModal && (
        <ModalEditarLink
          tipo="WhatsApp"
          linkAtual={link}
          textoAtual={texto}
          onClose={() => setMostrarModal(false)}
          onSave={({ link, texto }) => {
            onChange({ link, texto });
          }}
        />
      )}
    </div>
  );
}
