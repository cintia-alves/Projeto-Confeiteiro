import './InformacoesLoja.css';
import { LuMapPin, LuCreditCard, LuClock3 } from 'react-icons/lu';
import { useState } from 'react';

export default function InformacoesLoja({ isEditando }) {
  const [endereco, setEndereco] = useState('Endereço');
  const [pagamento, setPagamento] = useState('Formas de Pagamento');
  const [horario, setHorario] = useState('Horário de Funcionamento');

  return (
    <div className="informacoes-loja">
      <div className="info-linha">
        <LuMapPin className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        ) : (
          <span>{endereco}</span>
        )}
      </div>
      <div className="info-linha">
        <LuCreditCard className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={pagamento}
            onChange={(e) => setPagamento(e.target.value)}
          />
        ) : (
          <span>{pagamento}</span>
        )}
      </div>
      <div className="info-linha">
        <LuClock3 className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        ) : (
          <span>{horario}</span>
        )}
      </div>
    </div>
  );
}
