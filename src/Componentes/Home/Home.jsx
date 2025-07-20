
import React from "react";
import './Home.css'

import { useNavigate } from "react-router-dom";




function Home () {
  const navegar = useNavigate();
  function handleEntrar() {
    navegar("/app");
  } 


  return (
    <div id="div_all">
      <div id="div_header"> 
        <div id="div_header_logo" className='header'>
          <h3 id="div_logo"> Logo </h3> 
        </div>
        <div id="div_header_botao" className='header'>
             <button id="botao_div_header" onClick={handleEntrar}>Entrar</button>

        </div>
      </div>
      <div id="div_body">
        <div id="div_body_left" className='testediv'>
        <h1> GeraCatálogos: Sua <br /> doceria na internet, do <br /> jeitinho que você<br /> precisa!</h1>
        <p> Você ama preparar doces, bolos e delícias caseiras, mas sente<br /> dificuldade na hora de usar a internet para montar seu cardápio<br /> online? A gente entende, e criou a solução perfeita para você.</p>
        <button id="botao_entrar_body_left"> Fazer cadastro / entrar</button>

        </div>
        <div id="div_body_right" className='testediv'>
          <img id="imagem_body_right" src="https://cms-cdn.saipos.com/assets/2023/08/22/Tamanho-Banner-HTML_uid_64e51a1b58150.jpg" width="420" height="305"  ></img>


        </div>
      </div>
    </div>
  )
}

export default Home;