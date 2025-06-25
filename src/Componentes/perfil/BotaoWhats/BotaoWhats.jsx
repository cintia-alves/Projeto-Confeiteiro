import './BotaoWhats.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function BotaoWhats() {
return (
<button className="botao-whats">
<FaWhatsapp className="icone-whats" />
WhatsApp
</button>
);
}