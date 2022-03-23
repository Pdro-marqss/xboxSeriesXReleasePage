import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-xbox.svg';

import { Header_container } from './styles'; 


function Header() {
    return(
        <Header_container>
            <Link to="/" className='logo-link'><img className='logo' src={Logo} alt="logo"></img></Link>

            <ul>
                <li><Link to="/">Visão geral</Link></li>
                <li><Link to="">Jogos</Link></li>
                <li><Link to="#">Galeria</Link></li>
                <li><Link to="#">Unbox</Link></li>
            </ul>

            <button className='btn'>Ver disponibilidade</button>
        </Header_container>
    );
} 

export default Header;