import './AreaDeCards.css';
import CardProduto from '../CardProduto/CardProduto';

export default function AreaDeCards({ produtos, onEditar, onRemover }) {
  return (
    <div className="area-cards">
      {produtos.length > 0 ? ( //coloquei isso pra mostrar a mensagem que nao tem produti
        produtos.map((doce) => (
          <CardProduto
            key={doce.id}
            produto={doce}
            onEditar={onEditar}
            onRemover={onRemover} 
          />
        ))
      ) : (
        <p>Você não possui produtos cadastrados nessa categoria, para cadastrar aperte no botão abaixo.</p>
      )}
    </div>
  );
}
