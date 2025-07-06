import './Cardapio.css';
import AreaCardapio from './AreaCardapio/AreaCardapio';
import ModalAdicionarProduto from './ModalAdicionarProduto/ModalAdicionarProduto';
import { useState } from 'react';

const produtosIniciais = [
  {
    nome: "Bolo de Pote (Ninho c/ Morango)",
    descricao: "Massa fofinha, recheio cremoso e morangos frescos.",
    preco: "R$ 15,00",
    categoria: "Bolos"
  },
  {
    nome: "Fatia de Bolo Red Velvet",
    descricao: "Aveludado, com recheio de cream cheese.",
    preco: "R$ 18,00",
    categoria: "Bolos"
  },
  {
    nome: "Pote da Felicidade (Brownie)",
    descricao: "Pedaços de brownie, mousse de chocolate e creme de avelã.",
    preco: "R$ 22,00",
    categoria: "Pote da Felicidade"
  },
  {
    nome: "Pote da Felicidade (Uva)",
    descricao: "Creme de Ninho, uvas verdes sem semente e ganache.",
    preco: "R$ 20,00",
    categoria: "Pote da Felicidade"
  },
  {
    nome: "Brigadeiro Gourmet de Pistache",
    descricao: "Massa cremosa de pistache, finalizado com granulado de pistache.",
    preco: "R$ 6,00",
    categoria: "Brigadeiros"
  },
  {
    nome: "Brigadeiro de Churros",
    descricao: "Recheado com doce de leite e passado no açúcar com canela.",
    preco: "R$ 5,50",
    categoria: "Brigadeiros"
  },
  {
    nome: "Brigadeiro Tradicional",
    descricao: "Clássico de chocolate com granulado macio.",
    preco: "R$ 4,50",
    categoria: "Brigadeiros"
  },
  {
    nome: "Ovo de Colher (Kinder Bueno)",
    descricao: "Casca de chocolate ao leite, recheio cremoso e pedaços de Kinder.",
    preco: "R$ 85,00",
    categoria: "Páscoa"
  },
  {
    nome: "Mini Ovo Trufado",
    descricao: "Casca de chocolate meio amargo com recheio trufado.",
    preco: "R$ 35,00",
    categoria: "Páscoa"
  }
];

export default function Cardapio() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [modalAberto, setModalAberto] = useState(false);

  const handleAdicionarProduto = (novoProduto) => {
    setProdutos(produtosAnteriores => [...produtosAnteriores, novoProduto]);
    setModalAberto(false);
  };

  return (
    <div className="cardapio">
      <div className="conteudo-scrollavel">
        <AreaCardapio produtos={produtos} />
      </div>

      <button className="botao-adicionar-fixo" onClick={() => setModalAberto(true)}>
        Adicionar produto
      </button>

      {modalAberto && (
        <ModalAdicionarProduto 
          onClose={() => setModalAberto(false)}
          onSave={handleAdicionarProduto}
        />
      )}
    </div>
  );
}