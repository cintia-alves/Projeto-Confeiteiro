import { useState } from "react";
import "./BotaoInstagram.css";
import { FaInstagram } from "react-icons/fa";
import ModalEditarLink from "../ModalEditarLink/ModalEditarLink";
import {db} from "../../../firebase";
import {doc, getDoc, setDoc} from "firebase/firestore";

export default function BotaoInstagram({ isEditando, botao, onChange }) {//adicionei botao e onChange como props
  const [mostrarModal, setMostrarModal] = useState(false);
  //const [link, setLink] = useState("");
  //const [texto, setTexto] = useState("Instagram");
  const link = botao?.link || "";
  const texto = botao?.texto || "Instagram";

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
          <button className="botao-acao" onClick={() => onChange({ link: "", texto })}>Excluir</button>
        </div>
      )}

      {mostrarModal && (
        <ModalEditarLink
          tipo="Instagram"
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