import React from 'react';
import "./Lista_E.scss";
import { exportDefaultDeclaration } from '@babel/types';
import Lista from "./Lista"
import ballet from '../imagem/ballet.jpg';
import danca_ventre from '../imagem/dancaventre.jpeg';
import ginastica_artistica from '../imagem/ginastica_A.jpg';
import natacao from '../imagem/natacao.jpeg';
import zumba from '../imagem/zumba.jpeg';
import futsal from '../imagem/futsal.jpeg';
import basquete from '../imagem/basquete.jpeg';
import voleibol from '../imagem/volei.jpeg';

const Lista_E = () =>{
    return(
        <div className="imagem">
            <Lista titulo="Ballet" imagem={ballet} descricao="As aulas de ballet clássico são oferecidas pela Prefeitura Municipal de Caieiras gratuitamente." data="As aulas terão inicio no dia: 03/03/2020" local="Local: Rua Argentina   n°400     Jardim Santo Antonio       Caieiras "/>
            <Lista titulo="Dança do ventre" imagem={danca_ventre} descricao="As aulas de dança do ventre são oferecidas pela Prefeitura Municipal de Caieiras gratuitamente." data="As aulas terão inicio no dia: 24/03/2020" local="Local: Rua Argentina   n°400     Jardim Santo Antonio       Caieiras "/>
            <Lista titulo="Ginástica Artística" imagem={ginastica_artistica} descricao="As aulas de ginastica artistica são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 02/04/2020" local ="Local: Avenida Marcelino Bressiani    n°178     Caieiras "/>
            <Lista titulo="Zumba" imagem={zumba} descricao="As aulas de zumba são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 03/04/2020" local="Local: Rua Argentina   n°400     Jardim Santo Antonio       Caieiras "/>
            <Lista titulo="Natação" imagem={natacao} descricao="As aulas de natação são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 04/03/2020"  local="Local: Rua Portugal  n°300  Região Central  Caieiras"/>
            <Lista titulo="Futsal" imagem={futsal} descricao="As aulas de futsal são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 02/03/2020" local="Local: Rua Portugal  n°300  Região Central  Caieiras"/>
            <Lista titulo="Basquete" imagem={basquete} descricao="As aulas de basquete são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 02/03/2020" local="Local: Rua Portugal  n°300  Região Central  Caieiras"/>
            <Lista titulo="Voleibol" imagem={voleibol} descricao="As aulas de voleibol são oferecidas gratuitamente pela Prefeitura Municipal de Caieiras." data="As aulas terão inicio no dia: 02/03/2020"  local="Local: Rua Portugal  n°300  Região Central  Caieiras"/>
        

        </div>
    )
}

export default Lista_E;