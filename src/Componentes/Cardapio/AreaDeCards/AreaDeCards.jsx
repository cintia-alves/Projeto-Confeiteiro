import './AreaDeCards.css';
import CardProduto from '../CardProduto/CardProduto';

export default function AreaDeCards() {
  return (
    <div className="area-cards">
      <CardProduto />
      {/* futuros <CardProduto /> podem ser duplicados aqui */}
    </div>
  );
}
