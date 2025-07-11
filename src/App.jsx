import './App.css';
import {useState} from 'react';
import Perfil from './Componentes/perfil/Perfil';
import Cardapio from './Componentes/Cardapio/Cardapio';
import BotaoEditar from './Componentes/BotaoEditar/BotaoEditar';
import BotaoSair from './Componentes/BotaoSair/BotaoSair';


function App() {
  const [isEditando, setIsEditando] = useState(false);
  return (
  <>
   <div className="tela">
    <BotaoEditar onClick={() => setIsEditando(!isEditando)} />
    <BotaoSair />
    <div className="layout">
      <Perfil isEditando={isEditando} setIsEditando={setIsEditando} />
      <Cardapio />
    </div>
    </div>
  </>
   ); 
}

export default App;