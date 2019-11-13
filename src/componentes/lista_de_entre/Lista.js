import React from "react";
import './Lista.scss';
import { Link } from 'react-router-dom';
import img from '../imagem/ballet.jpg';
import ims from '../imagem/dancaventre.jpeg';

const Lista = ({titulo,imagem,descricao,local, data}) =>{
    return(
        <div className="lista">
            <h1>{titulo}</h1>
            <img src={imagem}alt="imagem" />
            <p>{descricao}
            <h2>{data}</h2>
            <h2>{local}</h2>
            </p>
           
          <Link to="/cadastroentre"><button> Inscreva-se</button></Link>
           
           <div></div>
        </div>
    )

}
export default Lista;