import './AreaCardapio.css';
import AreaDasCategorias from '../AreaDasCategorias/AreaDasCategorias';
import AreaDeCards from '../AreaDeCards/AreaDeCards';

export default function AreaCardapio({ produtos, setModalAberto }) {
  return (
    <div className="area-cardapio">
      <h2 className="titulo-cardapio">Cardápio</h2>
      <AreaDasCategorias />
      <AreaDeCards produtos={produtos} setModalAberto={setModalAberto}/>
    </div>
  );
}