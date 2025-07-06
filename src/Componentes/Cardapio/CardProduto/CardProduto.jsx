import './CardProduto.css';
import { FaPen } from 'react-icons/fa';

// import { useState,useEffect } from 'react';


export default function CardProduto({ produto }) {

  return (
    <div className="card-produto">
      <div className="imagem-produto" style={{ backgroundImage: produto.foto ? `url(${produto.foto})` : 'none' }}>
        <FaPen className="icone-editar" />
      </div>
      <div className="info-produto">
        <h4 className="titulo-produto">{produto.nome}</h4>
        <p className="descricao-produto">
          {produto.descricao}
        </p>
        <p className="preco-produto">{produto.preco}</p>
      </div>
    </div>
  );
}
