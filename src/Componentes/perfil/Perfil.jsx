import './Perfil.css';
import CapaImagem from './CapaImagem/CapaImagem';
import FotoPerfil from './FotoPerfil/FotoPerfil';
import NomeLoja from './NomeLoja/NomeLoja';
import DescricaoLoja from './DescricaoLoja/DescricaoLoja';
import InformacoesLoja from './InformacoesLoja/InformacoesLoja';
import BotaoWhats from './BotaoWhats/BotaoWhats';
import BotaoInstagram from './BotaoInstagram/BotaoInstagram';
import BotaoLinkPerfil from './BotaoLinkPerfil/BotaoLinkPerfil';

export default function Perfil({ isEditando }) {
return (
<div className="perfil">
<CapaImagem isEditando={isEditando} />
<FotoPerfil isEditando={isEditando} />
<NomeLoja />
<DescricaoLoja />
<InformacoesLoja />
<BotaoWhats />
<BotaoInstagram />
<BotaoLinkPerfil />
</div>
);
}