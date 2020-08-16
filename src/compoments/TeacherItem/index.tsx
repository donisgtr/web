import React from 'react';
import TeacherForm from '../../pages/TeacherFrom';

import whatsappIcon from "../../assests/images/icons/whatsapp.svg";

import "./styles.css"; 

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/14313822?s=460&u=9c32e7f4487b1e069e28531b4a5fff0275c0893f&v=4" alt="Donis Sousa"/>
                        <div>
                            <strong>Donis Sousa</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>
                        Professor de informatica.
                        <br/><br/>
                        OutSystems.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                    </footer>
                </article>
    );

}

export default TeacherItem;
