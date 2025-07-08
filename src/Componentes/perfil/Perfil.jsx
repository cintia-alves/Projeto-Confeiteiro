import './Perfil.css';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { ref, set, onValue } from 'firebase/database';
import CapaImagem from './CapaImagem/CapaImagem';
import FotoPerfil from './FotoPerfil/FotoPerfil';
import NomeLoja from './NomeLoja/NomeLoja';
import DescricaoLoja from './DescricaoLoja/DescricaoLoja';
import InformacoesLoja from './InformacoesLoja/InformacoesLoja';
import BotaoWhats from './BotaoWhats/BotaoWhats';
import BotaoInstagram from './BotaoInstagram/BotaoInstagram';
import BotaoLinkPerfil from './BotaoLinkPerfil/BotaoLinkPerfil';

export default function Perfil({ isEditando, setIsEditando }) {
  const [dadosPerfil, setDadosPerfil] = useState({
    nome: 'Nome da Loja',
    descricao: 'Escreva aqui a descrição da sua loja.\nPara que seus clientes conheçam melhor o seu trabalho e os produtos que você vende.',
    endereco: 'Endereço',
    pagamento: 'Formas de Pagamento',
    horario: 'Horário de Funcionamento',
    urlCapa: '',
    urlFotoPerfil: '',
  });

  const [dadosTemporarios, setDadosTemporarios] = useState(dadosPerfil);

  useEffect(() => {
    const referenciaPerfil = ref(db, 'perfil/dados');
    const parar = onValue(referenciaPerfil, (instantaneo) => {
      const dados = instantaneo.val();
      if (dados) {
        setDadosPerfil(dados);
      }
    });
    return () => parar();
  }, []);

  useEffect(() => {
    if (isEditando) {
      setDadosTemporarios(dadosPerfil);
    }
  }, [isEditando, dadosPerfil]);

  const atualizarDadosTemporarios = (evento) => {
    const { name, value } = evento.target;
    setDadosTemporarios(dadosAnteriores => ({
      ...dadosAnteriores,
      [name]: value,
    }));
  };

  const cancelarEdicao = () => {
    setIsEditando(false);
  };

  const salvarEdicao = () => {
    setDadosPerfil(dadosTemporarios);
    set(ref(db, 'perfil/dados'), dadosTemporarios);
    setIsEditando(false);
  };

  
  return (
    <div className="perfil">
      <CapaImagem
        isEditando={isEditando}
        urlImagem={isEditando ? dadosTemporarios.urlCapa : dadosPerfil.urlCapa}
        setDadosTemporarios={setDadosTemporarios}
      />

      <FotoPerfil 
        isEditando={isEditando} 
        urlFoto={isEditando ? dadosTemporarios.urlFotoPerfil : dadosPerfil.urlFotoPerfil}
        setDadosTemporarios={setDadosTemporarios}
      />
      <NomeLoja
        isEditando={isEditando}
        value={isEditando ? dadosTemporarios.nome : dadosPerfil.nome}
        onChange={atualizarDadosTemporarios}
      />
      <DescricaoLoja
        isEditando={isEditando}
        value={isEditando ? dadosTemporarios.descricao : dadosPerfil.descricao}
        onChange={atualizarDadosTemporarios}
      />
      <InformacoesLoja
        isEditando={isEditando}
        data={isEditando ? dadosTemporarios : dadosPerfil}
        onChange={atualizarDadosTemporarios}
      />

      <div className='caixa-botoes'>
        <BotaoWhats isEditando={isEditando} />
        <BotaoInstagram isEditando={isEditando} />
        <BotaoLinkPerfil />
        {isEditando && (
          <div className='caixa-botoes-menores'>
            <button className='botao-pequeno botao-cancelar' onClick={cancelarEdicao}>Cancelar</button>
            <button className='botao-pequeno botao-salvar' onClick={salvarEdicao}>Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
}