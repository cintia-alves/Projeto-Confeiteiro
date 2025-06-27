import './DescricaoLoja.css';
import { useState } from 'react';

export default function DescricaoLoja({ isEditando }) {
  const [descricao, setDescricao] = useState(
    'Escreva aqui a descrição da sua loja.\nPara que seus clientes conheçam melhor o seu trabalho e os produtos que você vende.'
  );

  return (
    <div className="descricao-loja">
      {isEditando ? (
        <textarea
          className="descricao-textarea"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          maxLength={240}
        />
      ) : (
        <p>{descricao}</p>
      )}
    </div>
  );
}
