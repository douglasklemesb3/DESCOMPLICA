import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

    return (
        <div className="NavBar">
            <nav>
                <div className="ancora">
                <h1>DESCOMPLICA</h1>
                <Link onClick={FecharMenu} to='/'>HOME</Link>
                <Link onClick={FecharMenu} to="/cursos"> CURSOS</Link>
                <Link onClick={FecharMenu} to="/">ENTERTENIMENTOS</Link>
                <Link onClick={FecharMenu} to="/">SOBRE</Link>
                </div>
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                <h1>DESCOMPLICA</h1>
                <Link onClick={FecharMenu} to='/'>HOME</Link>
                <Link onClick={FecharMenu} to="/cursos"> CURSOS</Link>
                <Link onClick={FecharMenu} to="/entretenimentos">ENTERTENIMENTOS</Link>
                <Link onClick={FecharMenu} to="/sobre">SOBRE</Link>
                
            </section>
        </div>
    );
}
export default NavBar;
