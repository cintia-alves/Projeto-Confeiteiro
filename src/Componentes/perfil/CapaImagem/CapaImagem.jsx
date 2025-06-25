import './CapaImagem.css';
import { useState } from 'react';

export default function CapaImagem() {
const [imagem, setImagem] = useState(null);

function handleImagemChange(event) {
const file = event.target.files[0];
if (file) {
setImagem(URL.createObjectURL(file));
}
}

return (
<div className="imagem-capa-wrapper">
{imagem ? (
<img src={imagem} alt="Capa da loja" className="imagem-capa" />
) : (
<label className="input-label">
<input type="file" accept="image/*" onChange={handleImagemChange} />
<span>Escolher Imagem de Capa</span>
</label>
)}
</div>
);
}