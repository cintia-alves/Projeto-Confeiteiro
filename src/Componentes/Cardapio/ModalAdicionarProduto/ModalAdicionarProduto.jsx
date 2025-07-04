import { useState } from 'react';
import './ModalAdicionarProduto.css';

export default function ModalAdicionarProduto({ onClose, onSave }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

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
      preco: precoFormatado
    };

    onSave(novoProduto);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="preco">Preço (Digite somente números)</label>
            <input
              type="text"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
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
