//import {Link} from 'react-router-dom';
import React, { useState} from 'react';

import './index.css';


function Header(){
    const [Temp, setTemp] = useState('ert');

    function temp1(){
        setTemp('000');
        console.log('clik');
        alert('ddd');
    }
    console.log('clik');

    return(
        <header>
            <div className="container header__container">
                <nav className='header__nav'>
                    <ul className='header__menu'>
                        <li className='header__menu-item'>
                            {/* <Link to='/'>Головна</Link> */}
                            Головна 
                        </li>
                        <li className='header__menu-item'>
                            {/* <Link to='/instruction'>Як отримати знижку</Link> */}
                            Як отримати знижку
                        </li>
                        <li className='header__menu-item'>
                            {Temp}
                        </li>
                    </ul>
                </nav>
            </div>
            <button onClick={temp1}>1</button>
        </header>
    );
}

export default Header;