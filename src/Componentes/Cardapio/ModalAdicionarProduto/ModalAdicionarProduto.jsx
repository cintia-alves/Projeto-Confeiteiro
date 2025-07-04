import { useState } from 'react';
import './ModalAdicionarProduto.css';

export default function ModalAdicionarProduto({ onClose, onSave }) {
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    descricao: '',
    preco: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const produtoFinal = {
        ...novoProduto,
        preco: `R$ ${novoProduto.preco}`
    }
    onSave(produtoFinal);
  };

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
              name="nome"
              value={novoProduto.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={novoProduto.descricao}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preco">Preço (ex: 10,00)</label>
            <input
              type="text"
              id="preco"
              name="preco"
              value={novoProduto.preco}
              onChange={handleChange}
              placeholder="10,00"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-salvar">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}