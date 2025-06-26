// import './Cardapio.css'
// export default function Cardapio() {
// return (
// <div className="cardapio">
//     <p>Área do Cardápio (em branco por enquanto)</p>
// </div>
// );
// }

import './Cardapio.css';
import AreaCardapio from './AreaCardapio/AreaCardapio';

export default function Cardapio() {
  return (
    <div className="cardapio">
      <AreaCardapio />
    </div>
  );
}
