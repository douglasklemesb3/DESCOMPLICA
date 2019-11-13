import React from 'react';
import  '../finalE/FinalE.scss';




const FinalE= () => {
    let aleatorio = Math.floor(Math.random() * 10000);
    return(
        <div className="FinalE">
        <div className='texto'>
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
            
        </div>
    </div>


    )
}
export default FinalE;


