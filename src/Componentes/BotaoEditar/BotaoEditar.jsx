import './BotaoEditar.css';
export default function BotaoEditar({onClick}) {
    return (
        <>
        <button className="botao-editar" onClick={onClick}>Editar Perfil</button>
        </>
    ) 
}
