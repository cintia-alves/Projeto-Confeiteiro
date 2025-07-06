import './CardProduto.css';
import { FaPen } from 'react-icons/fa';
import Cardapio from '../Cardapio';

// import { useState,useEffect } from 'react';


export default function CardProduto({ produto, setModalAberto}) {
  // const [produtoEditando, setProdutoEditando] = useState(null);

  function EditCard(params) {
    setModalAberto(true);
  }

export default function CardProduto({ produto }) {

  function cortarTexto(texto, maxCaracteres) {
    if(texto.length >= maxCaracteres) {
      return texto.slice(0, maxCaracteres) + "...";
    }
    return texto;
  }

  return (
    <div className="card-produto">
      <div className="imagem-produto" style={{ backgroundImage: produto.foto ? `url(${produto.foto})` : 'none' }}>
        <div className="card-edit-produto" onClick={EditCard}>
          <FaPen className="icone-editar" />
        </div>
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
