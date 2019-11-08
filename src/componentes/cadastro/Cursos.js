import React, { useState } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';
import './Cursos.scss';
import Button from './Button';
import { API_URL } from '../../api';

const Curso = () => {
    const nomeRef = React.useRef("");
    const idadeRef = React.useRef("");
    const rgREf = React.useRef("");
    const cpfRef = React.useRef("");
    const nascimentoRef = React.useRef("");
    const sexoRef = React.useRef("");
    const emailRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const bairroRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const residenciaRef = React.useRef("");
    const periodoRef = React.useRef("");



    const Cadastrar = (event) => {
        event.preventDefault();

        fetch(API_URL +'/api/cursos/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                idade: idadeRef.current.value,
                rg: rgREf.current.value,
                cpf: cpfRef.current.value,
                dataNascimento: nascimentoRef.current.value,
                sexo: sexoRef.current.value,
                email: emailRef.current.value,
                telefone: telefoneRef.current.value,
                endereco: enderecoRef.current.value,
                bairro: bairroRef.current.value,
                numero_de_recidencia: residenciaRef.current.value,
                periodo: periodoRef.current.value,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id && value.idade >= 13) {

    
                localStorage.setItem("id", value.id)
                window.location = "/finalc"

            } else {
                alert("Desculpe,seu Cadastro não foi realizado,por que você tem idade o suficiente.")
            }

            nomeRef.current.value = "";
            idadeRef.current.value = "";
            rgREf.current.value = "";
            cpfRef.current.value = "";
            nascimentoRef.current.value = "";
            sexoRef.current.value = "";
            emailRef.current.value = "";
            telefoneRef.current.value = "";
            enderecoRef.current.value = "";
            bairroRef.current.value = "";
            residenciaRef.current.value = "";
            periodoRef.current.value = "";

        })
    }
    return (
        <div className="Cursos">
            <h1>Matricule-se aqui!</h1>
            <form onSubmit={Cadastrar}>
                <label>Nome:</label>
                    <input className="formu"  type="text" ref={nomeRef} placeholder={"Digite seu nome"} autoFocus/>
                <label>Idade:</label>
                    <input className="formu"  type="text" ref={idadeRef} placeholder={"Digite sua idade"} autoFocus/>
                <label>RG:</label>
                    <input className="formu"  type="text" ref={rgREf} placeholder={"Ex:00.000.000.00"} autoFocus/>
                <label>CPF:</label>
                    <input className="formu"  type="text" ref={cpfRef} placeholder={"Ex:000.000.000.00"} autoFocus/>
                <label>Data de Nascimento:</label>
                    <input className="formu"  type="text" ref={nascimentoRef} placeholder={"Ex:00/00/0000"} autoFocus/>
                <label >Sexo:</label>
                <select ref={sexoRef} name="sexo" >
                    <option value="sexo">---</option>
                    <option value="M"> Masculino</option>
                    <option value="F"> Feminino</option>
                    <option value="ND">Não definido</option>
                </select>
                <label>Email:</label>
                    <input className="formu"  type="text" ref={emailRef} placeholder={""} />
                <label>Telefone:</label>
                    <input className="formu"  type="text" ref={telefoneRef} placeholder={"Ex:(00)00000-0000"} />
                <label>Endereço:</label>
                    <input className="formu"  type="text" ref={enderecoRef} placeholder={"Digite seu endereco"} />
                <label>Bairro:</label>
                    <input className="formu"  type="text" ref={bairroRef} placeholder={"Digite o bairro que mora"} />
                <label>Número:</label>
                    <input className="formu"  type="text" ref={residenciaRef} placeholder={"Ex:0000"} />
                <label >Periodo:</label>
                <select ref={periodoRef} name="periodo" >
                    <option value="perido">---</option>
                    <option value="M">Manhã</option>
                    <option value="T">Tarde</option>
                    <option value="N"> Noite </option>
                </select>
                <Button> Registrar</Button>
            </form>
        </div>
    )
}



export default Curso;
