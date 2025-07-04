import './Perfil.css';
import { useState, useEffect } from 'react'; // Importe o useEffect
import CapaImagem from './CapaImagem/CapaImagem';
import FotoPerfil from './FotoPerfil/FotoPerfil';
import NomeLoja from './NomeLoja/NomeLoja';
import DescricaoLoja from './DescricaoLoja/DescricaoLoja';
import InformacoesLoja from './InformacoesLoja/InformacoesLoja';
import BotaoWhats from './BotaoWhats/BotaoWhats';
import BotaoInstagram from './BotaoInstagram/BotaoInstagram';
import BotaoLinkPerfil from './BotaoLinkPerfil/BotaoLinkPerfil';

export default function Perfil({ isEditando, setIsEditando }) {
  const [perfilData, setPerfilData] = useState({
    nome: 'Nome da Loja',
    descricao: 'Escreva aqui a descrição da sua loja.\nPara que seus clientes conheçam melhor o seu trabalho e os produtos que você vende.',
    endereco: 'Endereço',
    pagamento: 'Formas de Pagamento',
    horario: 'Horário de Funcionamento',
  });

  const [tempData, setTempData] = useState(perfilData);

  useEffect(() => {
    if (isEditando) {
      setTempData(perfilData);
    }
  }, [isEditando, perfilData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsEditando(false);
  };

  const handleSave = () => {
    setPerfilData(tempData);
    setIsEditando(false);
  };
  
  return (
    <div className="perfil">
      <CapaImagem isEditando={isEditando} />
      <FotoPerfil isEditando={isEditando} />
      <NomeLoja 
        isEditando={isEditando} 
        value={isEditando ? tempData.nome : perfilData.nome}
        onChange={handleChange}
      />
      <DescricaoLoja 
        isEditando={isEditando} 
        value={isEditando ? tempData.descricao : perfilData.descricao}
        onChange={handleChange}
      />
      <InformacoesLoja 
        isEditando={isEditando}
        data={isEditando ? tempData : perfilData}
        onChange={handleChange}
      />

      <div className='caixa-botoes'>
        <BotaoWhats isEditando={isEditando} />
        <BotaoInstagram isEditando={isEditando} />
        <BotaoLinkPerfil />
        {isEditando && (
          <div className='caixa-botoes-menores'>
            <button className='botao-pequeno botao-cancelar' onClick={handleCancel}>Cancelar</button>
            <button className='botao-pequeno botao-salvar' onClick={handleSave}>Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
}