import './FotoPerfil.css';
import { useState } from 'react';

export default function FotoPerfil() {
const [foto, setFoto] = useState(null);

function handleFotoChange(event) {
const file = event.target.files[0];
if (file) {
setFoto(URL.createObjectURL(file));
}
}

return (
<div className="foto-perfil-container">
<div className="foto-wrapper">
{foto ? (
<img src={foto} alt="Foto do confeiteiro" className="foto-perfil" />
) : (
<label className="foto-upload-label">
<input type="file" accept="image/*" onChange={handleFotoChange} />
<span>Escolher Foto de Perfil</span>
</label>
)}
</div>
</div>
);
}