import './CardProduto.css';
import { FaPen } from 'react-icons/fa';

export default function CardProduto({ produto, onEditar }) {

  function cortarTexto(texto, maxCaracteres) {
    if (!texto) return '';
    if (texto.length > maxCaracteres) {
      return texto.slice(0, maxCaracteres) + "...";
    }
    return texto;
  }

  return (
    <div className="card-produto">
      <div 
        className="imagem-produto" 
        style={{ 
          backgroundImage: produto.foto ? `url(${produto.foto})` : 'url("https://via.placeholder.com/300x200.png?text=Sem+Foto")',
          backgroundColor: '#e0e0e0'
        }}
      >
        <div className="card-edit-produto" onClick={() => onEditar(produto)}>
          <FaPen className="icone-editar" />
        </div>
      </div>
      <div className="info-produto">
        <h4 className="titulo-produto">{cortarTexto(produto.nome, 25)}</h4>
        <p className="descricao-produto">
          {cortarTexto(produto.descricao, 60)}
        </p>
        <p className="preco-produto">{produto.preco}</p>
      </div>
    </div>
  );
}