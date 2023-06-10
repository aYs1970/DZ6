import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/players"> Игроки</Link>
                        </li>
                        <li>
                            <Link to="/teams">Команды</Link>
                        </li>
                        <li>
                            <Link to="/games">Игры</Link>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    );
}

export default Header;