import './InformacoesLoja.css';
import { LuMapPin, LuCreditCard, LuClock3 } from 'react-icons/lu';

export default function InformacoesLoja({ isEditando, data, onChange }) {
  return (
    <div className="informacoes-loja">
      <div className="info-linha">
        <LuMapPin className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={data.endereco}
            onChange={onChange}
            name="endereco"
          />
        ) : (
          <span>{data.endereco}</span>
        )}
      </div>
      <div className="info-linha">
        <LuCreditCard className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={data.pagamento}
            onChange={onChange}
            name="pagamento"
          />
        ) : (
          <span>{data.pagamento}</span>
        )}
      </div>
      <div className="info-linha">
        <LuClock3 className="icone" />
        {isEditando ? (
          <input
            type="text"
            className="info-input"
            value={data.horario}
            onChange={onChange}
            name="horario"
          />
        ) : (
          <span>{data.horario}</span>
        )}
      </div>
    </div>
  );
}