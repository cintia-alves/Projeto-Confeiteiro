import "./BotaoWhats.css";
import { FaWhatsapp } from "react-icons/fa";

export default function BotaoWhats() {
  return (
    <button className="botao-whats largura-total">
      <FaWhatsapp className="icone-whats" />
      WhatsApp
    </button>
  );
}
