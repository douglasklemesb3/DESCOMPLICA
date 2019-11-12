import React, { useState } from 'react';
import "./Cadastro.scss";
import Input from "./Input";
import Button from './Button';
import { API_URL } from '../../api';


const Cadastro = () => {
    const nomeRef = React.useRef("");
    const idadeRef = React.useRef("");
    const rgREf = React.useRef("");
    const cpfRef = React.useRef("");
    const sexoRef = React.useRef("");
    const emailRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const enderecoRef = React.useRef("");


    const Cadastrar = (event) => {
        event.preventDefault();

        fetch(API_URL + 'api/entretenimentos/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                idade: idadeRef.current.value,
                rg: rgREf.current.value,
                cpf: cpfRef.current.value,
                sexo: sexoRef.current.value,
                email: emailRef.current.value,
                telefone: telefoneRef.current.value,
                endereco: enderecoRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id && value.idade >= 4) {

                localStorage.setItem("id", value.id)
                window.location = "/finale"

            } else {
                alert("Desculpe,seu Cadastro não foi realizado")
            }

            nomeRef.current.value = "";
            idadeRef.current.value = "";
            rgREf.current.value = "";
            cpfRef.current.value = "";
            sexoRef.current.value = "";
            emailRef.current.value = "";
            telefoneRef.current.value = "";
            enderecoRef.current.value = "";

        })
    }
   return(
    <div className="Cursos">
    <h1>Matricule-se aqui!</h1>
    <form onSubmit={Cadastrar}>
        <label>Nome:</label>
        <input className="formu" type="text" ref={nomeRef}  />
        <label>Idade:</label>
        <input className="formu" type="text" ref={idadeRef}  />
        <label>RG:</label>
        <input className="formu" type="text" ref={rgREf}  />
        <label>CPF:</label>
        <input className="formu" type="text" ref={cpfRef}  />
        <label >Sexo:</label>
        <select ref={sexoRef} name="sexo" >
            <option value="sexo">---</option>
            <option value="M"> Masculino</option>
            <option value="F"> Feminino</option>
            <option value="ND">Não definido</option>
        </select>
        <label>Email:</label>
        <input className="formu" type="text" ref={emailRef} />
        <label>Telefone:</label>
        <input className="formu" type="text" ref={telefoneRef} />
        <label>Endereço:</label>
        <input className="formu" type="text" ref={enderecoRef}/>
        <Button> Registrar</Button>
    </form>
</div>
   )
}
export default Cadastro; 