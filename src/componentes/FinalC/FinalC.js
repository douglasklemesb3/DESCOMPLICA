import React from 'react'
import lista from '../lista_de_cursos/lista.js'
import Lista from '../lista_de_entre/Lista.js';
import '../FinalC/FinalC.scss'


const FinalC = () => {

    let aleatorio = Math.floor(Math.random() * 10000);
    
    return (
    <div className="FinalC">
        <div className="texto">
            <h1>Parabéns!</h1>
                <div className="Final">
                    <p>Cadastro concluido!</p>
                    <p>Seu número de inscrição é {aleatorio}</p>
                    <p>Recomendações:</p>
                    <p>Levar xerox dos seguintes documentos na primeira aula:</p>
                    <p>- RG;</p>
                    <p>- Comprovante de residência;</p>
                    <p>- CPF</p>

                </div>
            {/* <div className="container">
                <p>Cadastro concluido!</p>
                <p>Seu número de inscrição é {aleatorio}</p>
                <p>Recomendaçoes:</p>
                <p>Levar xerox dos seguintes documentos na primeira aula:</p>
                <p>- RG;<p/>
                <p>- Comprovante de resideñcia;<p/>
                <p>- CPF<p/>
             </div>
             */}
        </div>
    </div>
    )

}


export default FinalC