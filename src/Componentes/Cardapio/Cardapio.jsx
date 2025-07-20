import './Cardapio.css';
import AreaCardapio from './AreaCardapio/AreaCardapio';
import ModalProduto from './ModalProduto/ModalProduto';
import { useState } from 'react';

const produtosIniciais = [
  {
    id: 1,
    nome: "Bolo de Pote (Ninho c/ Morango)",
    descricao: "Massa fofinha, recheio cremoso de Ninho e morangos frescos selecionados.",
    preco: "R$ 15,00",
    categoria: "Bolos"
  },
  {
    id: 2,
    nome: "Fatia de Bolo Red Velvet",
    descricao: "Uma fatia generosa do nosso bolo aveludado, com recheio de cream cheese.",
    preco: "R$ 18,00",
    categoria: "Bolos"
  },
  {
    id: 3,
    nome: "Pote da Felicidade (Brownie)",
    descricao: "Pedaços de brownie, mousse de chocolate e creme de avelã.",
    preco: "R$ 22,00",
    categoria: "Pote da Felicidade"
  },
  {
    id: 4,
    nome: "Pote da Felicidade (Uva)",
    descricao: "Creme de Ninho, uvas verdes sem semente e ganache de chocolate branco.",
    preco: "R$ 20,00",
    categoria: "Pote da Felicidade"
  },
  {
    id: 5,
    nome: "Brigadeiro Gourmet de Pistache",
    descricao: "Massa cremosa de pistache, finalizado com granulado de pistache.",
    preco: "R$ 6,00",
    categoria: "Brigadeiros"
  },
  {
    id: 6,
    nome: "Brigadeiro Tradicional",
    descricao: "O clássico que todo mundo ama, feito com chocolate de alta qualidade.",
    preco: "R$ 4,50",
    categoria: "Brigadeiros"
  },
  {
    id: 7,
    nome: "Ovo de Colher (Kinder Bueno)",
    descricao: "Casca de chocolate ao leite, recheio cremoso e pedaços de Kinder.",
    preco: "R$ 85,00",
    categoria: "Páscoa"
  },
];

export default function Cardapio() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);

  const handleAbrirModalAdicao = () => {
    setProdutoParaEditar(null);
    setModalAberto(true);
  };

  const handleAbrirModalEdicao = (produto) => {
    setProdutoParaEditar(produto);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setProdutoParaEditar(null);
  };

  const handleSalvarProduto = (produtoSalvo) => {
    if (produtoParaEditar) {
      setProdutos(produtosAnteriores =>
        produtosAnteriores.map(p =>
          p.id === produtoParaEditar.id ? { ...produtoSalvo, id: p.id } : p
        )
      );
    } else {
      const novoProduto = { ...produtoSalvo, id: new Date().getTime() };
      setProdutos(produtosAnteriores => [...produtosAnteriores, novoProduto]);
    }
    handleFecharModal();
  };

  
  const handleRemoverProduto = (produtoRemover) => {
    setProdutos(produtosAtuais =>
      produtosAtuais.filter(p => p.id !== produtoRemover.id)
    );
  };

  return (
    <div className="cardapio">
      <div className="conteudo-scrollavel">
        {}
        <AreaCardapio
          produtos={produtos}
          onEditar={handleAbrirModalEdicao}
          onRemover={handleRemoverProduto}
        />
      </div>

      <button className="botao-adicionar-fixo" onClick={handleAbrirModalAdicao}>
        Adicionar produto
      </button>

      {modalAberto && (
        <ModalProduto
          onClose={handleFecharModal}
          onSave={handleSalvarProduto}
          produtoInicial={produtoParaEditar}
        />
      )}
    </div>
  );
}
