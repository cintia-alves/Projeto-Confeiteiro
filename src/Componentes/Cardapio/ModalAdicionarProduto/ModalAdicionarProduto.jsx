import { useState } from 'react';
import './ModalAdicionarProduto.css';
// import CardProduto from '../CardProduto/CardProduto';

export default function ModalAdicionarProduto({ onClose, onSave }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [foto, setFoto] = useState('C:\\Users\\maria\\Downloads\\WhatsApp Image 2025-07-01 at 18.58.27.jpeg');

  function trocarFoto(e) {
    const arquivo = e.target.files[0];
    if (arquivo) {
        const url = URL.createObjectURL(arquivo);
        setFoto(url);
      }
  }

  
  function handlePrecoChange(e) {
    const valor = e.target.value;

    const apenasNumerosEVirgula = /^[0-9]*[,]?[0-9]{0,2}$/;

    if (apenasNumerosEVirgula.test(valor) || valor === '') {
      setPreco(valor);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const precoNumerico = parseFloat(preco.replace(',', '.'));

    if (isNaN(precoNumerico)) {
      alert('Digite um valor de preço válido.');
      return;
    }

    const precoFormatado = `R$ ${precoNumerico.toFixed(2).replace('.', ',')}`;

    const novoProduto = {
      nome,
      descricao,
      preco: precoFormatado,
      foto
    };

    onSave(novoProduto);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div
        className={`foto-perfil ${foto ? 'com-foto' : ''}`}
        style={{ backgroundImage: foto ? `url(${foto})` : 'none' }}
      ></div>
          <div className="form-group">
            <label htmlFor="nome">Foto</label>
            <input
              type="file"
              id="foto"
              onChange={trocarFoto}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preco">Preço (ex: 12,50)</label>
            <input
              type="text"
              id="preco"
              value={preco}
              onChange={handlePrecoChange}
              placeholder="0,00"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-salvar">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
