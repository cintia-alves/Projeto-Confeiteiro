import './InformacoesLoja.css';
import { LuMapPin, LuCreditCard, LuClock3 } from 'react-icons/lu';

export default function InformacoesLoja() {
return (
<div className="informacoes-loja">
<div className="info-linha">
<LuMapPin className="icone" />
<span>Endereço</span>
</div>
<div className="info-linha">
<LuCreditCard className="icone" />
<span>Formas de Pagamento</span>
</div>
<div className="info-linha">
<LuClock3 className="icone" />
<span>Horário de Funcionamento</span>
</div>
</div>
);
}