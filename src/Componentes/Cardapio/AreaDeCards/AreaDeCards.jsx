import './AreaDeCards.css';
import CardProduto from '../CardProduto/CardProduto';

export default function AreaDeCards({ produtos, onEditar }) {
  return (
    <div className="area-cards">
      {produtos.map((doce) => (
        <CardProduto key={doce.id} produto={doce} onEditar={onEditar} />
      ))}
    </div>
  );
}