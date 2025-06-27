import './NomeLoja.css';
import { useState } from 'react';

export default function NomeLoja({ isEditando }) {
  const [nome, setNome] = useState('Nome da Loja');

  return (
    <div className="nome-loja">
      {isEditando ? (
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input-nome"
        />
      ) : (
        <h2>{nome}</h2>
      )}
    </div>
  );
}
