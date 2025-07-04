import './NomeLoja.css';

export default function NomeLoja({ isEditando, value, onChange }) {
  return (
    <div className="nome-loja">
      {isEditando ? (
        <input
          type="text"
          value={value}
          onChange={onChange}
          name="nome"
          className="input-nome"
        />
      ) : (
        <h2>{value}</h2>
      )}
    </div>
  );
}