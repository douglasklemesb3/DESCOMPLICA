import React from "react"
import './Lista_C.scss'
import ing from '../imagem/ingles.jpeg'
import comp from '../imagem/computador.jpeg'
import log from '../imagem/logistica.jpeg'
import adm from '../imagem/adm.jpg'
import lb from '../imagem/libras.jpg'
import ds from '../imagem/desenho.jpg'

import Lista from "./lista";

const ListaC = () =>{
    return(
    <div className="imagem">
 

    <Lista titulo="Inglês" imagem={ing} descricao="Curso de inglês disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 1 ano. " data="As aulas terão inicio no dia: 10/02/2020" local ="Local: Avenida dos Estudantes    n°360     Centro de Caieiras "/>
    <Lista titulo="Computação" imagem={comp} descricao="Curso de computação disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 6 messes."  data="As aulas terão inicio no dia: 22/02/2020" local ="Local: Rua Caminho Cluadio Manoel da Costa   s/n     Laranjeiras "/>
    <Lista titulo="Logística" imagem={log} descricao="Curso de logistica disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 2 anos." data="As aulas terão inicio no dia: 24/03/2003"  local ="Local: Avenida Professor Carvalho Pinto    n°207     Centro de Caieiras "/>
    <Lista titulo="Administração" imagem={adm} descricao="Curso de adiministração disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 1 ano." data="As aulas terão inicio no dia: 01/04/2020" local ="Local: Avenida Professor Carvalho Pinto    n°207     Centro de Caieiras "/>
    <Lista titulo="Libras" imagem={lb} descricao="Curso de libras disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 18 messes." data="As aulas terão inicio no dia: 03/03/2020"  local ="Local: Avenida Marcelino Bressiani    n°178     Caieiras "/>
    <Lista titulo="Desenho" imagem={ds} descricao="Curso de desenho disponibilizado pela Prefeitura de Caieiras gratuitamente com duração de 1 ano." data="As aulas terão inicio no dia: 01/03/2020" local ="Local: Rua Argentina   n°400     Jardim Santo Antonio       Caieiras "/>


    </div>      
    )
    }

export default ListaC;