import './AreaCardapio.css';
import AreaDeCards from '../AreaDeCards/AreaDeCards';
import ModalConfirmacao from '../ModalConfirmacao/ModalConfirmacao'; // Você precisa criar este componente
import { useState } from 'react';

const categorias = ["Bolos", "Pote da Felicidade", "Brigadeiros", "Páscoa"];

export default function AreaCardapio({ produtos, onEditar, onRemover }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0]);
  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [produtoParaRemover, setProdutoParaRemover] = useState(null);

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoriaSelecionada
  );

  function handleRemover(produto) {
    setProdutoParaRemover(produto);
    setModalConfirmacaoAberto(true);
  }

  function confirmarRemocao() {
    onRemover(produtoParaRemover);
    setModalConfirmacaoAberto(false);
    setProdutoParaRemover(null);
  }

  function cancelarRemocao() {
    setModalConfirmacaoAberto(false);
    setProdutoParaRemover(null);
  }

  return (
    <div className="area-cardapio">
      <h2 className="titulo-cardapio">Cardápio</h2>

      <div className="area-categorias">
        <h3 className="titulo-secao-categorias">Categorias</h3>
        <div className="abas-categorias">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`aba-categoria ${categoriaSelecionada === categoria ? 'ativa' : ''}`}
              onClick={() => setCategoriaSelecionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <AreaDeCards
        produtos={produtosFiltrados}
        onEditar={onEditar}
        onRemover={handleRemover}
      />

      {modalConfirmacaoAberto && (
        <ModalConfirmacao
          mensagem={`Tem certeza que deseja excluir "${produtoParaRemover?.nome}"?`}
          onConfirmar={confirmarRemocao}
          onCancelar={cancelarRemocao}
        />
      )}
    </div>
  );
}
