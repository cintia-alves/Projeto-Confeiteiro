import { useState, useEffect } from 'react';
import './ModalProduto.css';
import axios from 'axios';

const categorias = ["Bolos", "Pote da Felicidade", "Brigadeiros", "Páscoa"];

export default function ModalProduto({ onClose, onSave, produtoInicial = null }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [foto, setFoto] = useState(null);
  const [categoria, setCategoria] = useState(categorias[0]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (produtoInicial) {
      setNome(produtoInicial.nome);
      setDescricao(produtoInicial.descricao);
      const precoNumerico = produtoInicial.preco.replace('R$ ', '').trim();
      setPreco(precoNumerico);
      setFoto(produtoInicial.foto || null);
      setCategoria(produtoInicial.categoria);
    }
  }, [produtoInicial]);
  //mudei o trocarFoto pra add as fotos no cloudinary
  async function trocarFoto(e) {
    const arquivo = e.target.files[0];
    if (!arquivo) return;
    setCarregando(true);
    const formData = new FormData();
    formData.append('file', arquivo);
    formData.append('upload_preset', 'img-confeiteiro');
    formData.append('folder', 'confeiteiro');

    try {
      const resposta = await axios.post(
        'https://api.cloudinary.com/v1_1/dqmp5gzbg/image/upload',
        formData
      );
      const url = resposta.data.secure_url;
      setFoto(url);
    } catch (erro) {
      alert('Erro ao enviar imagem');
      console.error(erro);
    }

    setCarregando(false);
  }

  function removerFoto() {
    setFoto(null);
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

    const produtoSalvo = {
      nome,
      descricao,
      preco: precoFormatado,
      foto,
      categoria,
    };
    onSave(produtoSalvo);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{produtoInicial ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-layout">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="nome">Nome do Produto</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="preco">Preço (ex: 12,50)</label>
                <input type="text" id="preco" value={preco} onChange={handlePrecoChange} placeholder="0,00" required />
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                  {categorias.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                </select>
              </div>
            </div>
            <div className="form-right">
              <p className="foto-titulo">Adicione uma foto</p>
              <div className="foto-preview" style={{ backgroundImage: foto ? `url(${foto})` : 'none' }}></div>
              <div className="botoes-foto-modal">
                <button type="button" className="btn-foto" onClick={removerFoto} disabled={carregando}>Remover foto</button>
                <label className="btn-foto">
                  {carregando ? "Enviando..." : "Carregar foto"}
                  <input type="file" accept="image/*" onChange={trocarFoto} style={{ display: 'none' }} disabled={carregando}/>
                </label>
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-salvar" disabled={carregando}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}