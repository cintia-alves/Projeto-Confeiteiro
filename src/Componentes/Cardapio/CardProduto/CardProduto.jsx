import './CardProduto.css';
import { FaPen } from 'react-icons/fa';

export default function CardProduto({ produto }) {

  function cortarTexto(texto, maxCaracteres) {
    if(texto.length >= maxCaracteres) {
      return texto.slice(0, maxCaracteres) + "...";
    }
    return texto;
  }

  return (
    <div className="card-produto">
      <div className="imagem-produto">
        <FaPen className="icone-editar" />
      </div>
      <div className="info-produto">
        <h4 className="titulo-produto">{cortarTexto(produto.nome)}</h4>
        <p className="descricao-produto">
          {cortarTexto(produto.descricao, 60)}
        </p>
        <p className="preco-produto">{produto.preco}</p>
      </div>
    </div>
  );
}
