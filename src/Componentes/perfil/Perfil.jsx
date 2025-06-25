import './Perfil.css';
import CapaImagem from './CapaImagem/CapaImagem';
import FotoPerfil from './FotoPerfil/FotoPerfil';

export default function Perfil({ isEditando }) {
return (
<div className="perfil">
<CapaImagem isEditando={isEditando} />
<FotoPerfil />
</div>
);
}