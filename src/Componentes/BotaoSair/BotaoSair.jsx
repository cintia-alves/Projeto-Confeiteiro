import './BotaoSair.css';
import { useNavigate } from "react-router-dom";

export default function BotaoEditar() {
  const navegar = useNavigate();
  function handleSair() {
    navegar("/");
  }

  return (
    <button className="botao-sair" onClick={handleSair}>Sair</button>
  );
}