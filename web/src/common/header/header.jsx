import './index.css';

export default function Header(){
    return(
        <header>
            <div className="container header__container">
                <nav className='header__nav'>
                    <ul className='header__menu'>
                        <li className='header__menu-item'>
                            Головна
                        </li>
                        <li className='header__menu-item'>
                            Як отримати знижку
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}