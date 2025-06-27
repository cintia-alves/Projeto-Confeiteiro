import './BotaoInstagram.css';
import { FaInstagram } from 'react-icons/fa';

export default function BotaoInstagram() {
return (
<button className="botao-instagram largura-total">
<FaInstagram className="icone-insta" />
Instagram
</button>
);
}