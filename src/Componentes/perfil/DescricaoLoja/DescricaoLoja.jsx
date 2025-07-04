import './DescricaoLoja.css';

export default function DescricaoLoja({ isEditando, value, onChange }) {
  return (
    <div className="descricao-loja">
      {isEditando ? (
        <textarea
          className="descricao-textarea"
          value={value}
          onChange={onChange}
          name="descricao"
          maxLength={240}
        />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}