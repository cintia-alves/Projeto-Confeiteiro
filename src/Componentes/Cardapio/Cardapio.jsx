import './Cardapio.css';
import AreaCardapio from './AreaCardapio/AreaCardapio';
import ModalAdicionarProduto from './ModalAdicionarProduto/ModalAdicionarProduto';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const produtosIniciais = [
  {
    nome: "Brigadeiro Tradicional",
    descricao: "Clássico de chocolate com granulado.",
    preco: "R$ 4,50"
  },
  {
    nome: "Fatia de Bolo de Cenoura",
    descricao: "Com cobertura cremosa de chocolate.",
    preco: "R$ 12,00"
  },
  {
    nome: "Pudim de Leite (fatia)",
    descricao: "Lisinho e com calda de caramelo.",
    preco: "R$ 10,00"
  },
  {
    nome: "Torta de Limão (fatia)",
    descricao: "Massa crocante e merengue maçaricado.",
    preco: "R$ 14,50"
  },
  {
    nome: "Beijinho de Coco",
    descricao: "Docinho de coco com um cravo no topo.",
    preco: "R$ 4,00"
  },
  {
    nome: "Mousse de Maracujá",
    descricao: "Copo individual, azedinho e doce.",
    preco: "R$ 9,00"
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
      <AreaCardapio produtos={produtos} />

      <button className="botao-flutuante" onClick={() => setModalAberto(true)}>
        +
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