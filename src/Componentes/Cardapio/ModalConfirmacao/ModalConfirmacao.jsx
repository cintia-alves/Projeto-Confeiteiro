import './ModalConfirmacao.css';

export default function ModalConfirmacao({ mensagem, onConfirmar, onCancelar }) {
  return (
    <div className="modal-confirmacao-overlay">
      <div className="modal-confirmacao">
        <p>{mensagem}</p>
        <div className="botoes-modal">
          <button className="botao-cancelar" onClick={onCancelar}>Cancelar</button>
          <button className="botao-confirmar" onClick={onConfirmar}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
