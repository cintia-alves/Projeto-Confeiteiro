import './AreaCardapio.css';
import AreaDasCategorias from '../AreaDasCategorias/AreaDasCategorias';

export default function AreaCardapio() {
  return (
    <div className="area-cardapio">
      <h2 className="titulo-cardapio">Cardápio</h2>
      <AreaDasCategorias />
    </div>
  );
}
