import React from "react";
import Carol from "../assets/carol.png"
import { Img, Sessao, Div} from "../style/inicioStyle"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Whats from "../assets/whatsapp.svg"
import Github from "../assets/github.svg"
function Inicio() {
    return (
        <Sessao>
            <figure>
                <Img src={Carol} alt="Minha foto" />
            </figure>
            <Div>
                <h1>Olá eu sou a Carol</h1>
                <h3>Desenvolvedora Front-End</h3>
                <figure>
                    <a href="https://www.instagram.com/carolinademy/" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/maria-carolina-28b300213/" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://wa.me/">
                         <img src={Whats} alt="" />
                    </a>
                    <a href="https://github.com/mariaccarolina" target="_blank">
                         <img src={Github} alt="" />
                    </a>
                   
                </figure>
            </Div>
        </Sessao>
    )
}

export default Inicio