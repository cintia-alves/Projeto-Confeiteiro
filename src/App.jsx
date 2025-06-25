import './App.css';
import Perfil from './Componentes/perfil/Perfil';
import Cardapio from './Componentes/Cardapio/Cardapio';
import BotaoEditar from './Componentes/BotaoEditar/BotaoEditar';
import BotaoSair from './Componentes/BotaoSair/BotaoSair';

function App() {
return (
  <>
   <div className="tela">
    <BotaoEditar />
    <BotaoSair />
    <div className="layout">
      <Perfil />
      <Cardapio />
    </div>
    </div>
  </>
   ); 
}

export default App;