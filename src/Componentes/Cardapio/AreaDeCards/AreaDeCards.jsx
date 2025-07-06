import './AreaDeCards.css';
import CardProduto from '../CardProduto/CardProduto';

export default function AreaDeCards({ produtos, setModalAberto}) {
  return (
    <div className="area-cards">
      {produtos.map((doce, index) => {
        return (
          <CardProduto key={index} produto={doce} setModalAberto={setModalAberto}/>
        )
      })}
    </div>
  );
}