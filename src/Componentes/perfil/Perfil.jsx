import './Perfil.css';
import CapaImagem from './CapaImagem/CapaImagem';
import FotoPerfil from './FotoPerfil/FotoPerfil';
import NomeLoja from './NomeLoja/NomeLoja';
import DescricaoLoja from './DescricaoLoja/DescricaoLoja';

export default function Perfil({ isEditando }) {
return (
<div className="perfil">
<CapaImagem isEditando={isEditando} />
<FotoPerfil />
<NomeLoja />
<DescricaoLoja />
</div>
);
}