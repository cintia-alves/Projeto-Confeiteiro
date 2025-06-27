import './BotaoLinkPerfil.css';
import { FaLink } from 'react-icons/fa';

export default function BotaoLinkPerfil() {
  return (
    <button className="botao-link-perfil largura-total">
      <FaLink className="icone-link" />
      Link do Perfil
    </button>
  );
}
