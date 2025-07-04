import { useState } from "react";
import "./BotaoInstagram.css";
import { FaInstagram } from "react-icons/fa";
import ModalEditarLink from "../ModalEditarLink/ModalEditarLink";

export default function BotaoInstagram({ isEditando }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [link, setLink] = useState("");
  const [texto, setTexto] = useState("Instagram");

  return (
    <div className={`${link ? "div-botao-insta" : "div-botao-insta-disabled"}`}>
      <a href={link} target="_blank">
        <button className={`botao-instagram largura-total ${link ? "" : "botao-desativado"}`} disabled={link ? false : true}>
          <FaInstagram className="icone-insta" />
          {texto}
        </button>
      </a>
      {isEditando && (
        <div className="botao-insta-acoes">
          <button className="botao-acao" onClick={() => setMostrarModal(true)}>Editar</button>
          <button className="botao-acao" onClick={() => setLink("")}>Excluir</button>
        </div>
      )}

      {mostrarModal && (
        <ModalEditarLink
          tipo="Instagram"
          linkAtual={link}
          textoAtual={texto}
          onClose={() => setMostrarModal(false)}
          onSave={({ link, texto }) => {
            setLink(link);
            setTexto(texto);
          }}
        />
      )}
    </div>
  );
}