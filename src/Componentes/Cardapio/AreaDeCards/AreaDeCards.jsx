import './AreaDeCards.css';
import CardProduto from '../CardProduto/CardProduto';

export default function AreaDeCards({ produtos, onEditar, onRemover }) {
  return (
    <div className="area-cards">
      {produtos.map((doce) => (
        <CardProduto
          key={doce.id}
          produto={doce}
          onEditar={onEditar}
          onRemover={onRemover} 
        />
      ))}
    </div>
  );
}
