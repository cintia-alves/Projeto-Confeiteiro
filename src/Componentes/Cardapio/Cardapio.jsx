import "./Cardapio.css";
import AreaCardapio from "./AreaCardapio/AreaCardapio";
import ModalProduto from "./ModalProduto/ModalProduto";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { ref, set, onValue } from "firebase/database";

const produtosIniciais = [];// deixei ele vazio pra começar sem nada

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
  //adiconei o firebase aqui
  useEffect(() => {
    const referencia = ref(db, "cardapio/produtos");
    const unsubscribe = onValue(referencia, (snapshot) => {
      const dados = snapshot.val();
      if (dados) {
        const todosProdutos = Object.entries(dados).map(([categoria, produtos]) => 
          produtos.map(prod => ({...prod, categoria}))
      ).flat();
        setProdutos(todosProdutos);
      } else {
        setProdutos(produtosIniciais);
        salvarProdNoFB(produtosIniciais);
      }
    });
    return () => unsubscribe();
  }, []);

  const salvarProdNoFB = (produtosAtualizados) => {
    const ProdPorCategotia = {};
    produtosAtualizados.forEach((prod) => {
      if (!ProdPorCategotia[prod.categoria]) {
        ProdPorCategotia[prod.categoria] = [];
      }
      ProdPorCategotia[prod.categoria].push(prod);
    });
    set(ref(db, "cardapio/produtos"), ProdPorCategotia);
  };
  //ate
  //mudei essa funcao tb
  const handleSalvarProduto = (produtoSalvo) => {
    let novosProdutos;
    if (produtoParaEditar) {
      novosProdutos = produtos.map((prod) =>
        prod.id === produtoParaEditar.id
          ? { ...produtoSalvo, id: prod.id }
          : prod
      );
    } else {
      const novoProduto = { ...produtoSalvo, id: new Date().getTime() };
      novosProdutos = [...produtos, novoProduto];
    }
    setProdutos(novosProdutos);
    salvarProdNoFB(novosProdutos);
    handleFecharModal();
  };
  //mudei essa tb
  const handleRemoverProduto = (produtoRemover) => {
    const novosProdutos = produtos.filter(
      (prod) => prod.id !== produtoRemover.id
    );
    setProdutos(novosProdutos);
    salvarProdNoFB(novosProdutos);
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
