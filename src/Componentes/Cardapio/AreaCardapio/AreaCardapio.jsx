import './AreaCardapio.css';
import AreaDeCards from '../AreaDeCards/AreaDeCards';
import { useState } from 'react';

const categorias = ["Bolos", "Pote da Felicidade", "Brigadeiros", "Páscoa"];

export default function AreaCardapio({ produtos, onEditar, onRemover }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0]);

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoriaSelecionada
  );

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

      {/* ✅ Agora repassa o onRemover também */}
      <AreaDeCards
        produtos={produtosFiltrados}
        onEditar={onEditar}
        onRemover={onRemover}
      />
    </div>
  );
}
