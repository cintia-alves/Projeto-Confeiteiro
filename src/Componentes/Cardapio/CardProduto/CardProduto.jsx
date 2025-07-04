import './CardProduto.css';
import { FaPen } from 'react-icons/fa';

export default function CardProduto() {
  return (
    <div className="card-produto">
      <div className="info-produto">
        <h4 className="titulo-produto">Produto</h4>
        <p className="descricao-produto">
          Descrição, <br />
          Descrição, <br />
          Descrição
        </p>
        <p className="preco-produto">R$00,00</p>
      </div>
      <div className="imagem-produto">
        <FaPen className="icone-editar" />
      </div>
    </div>
  );
}
