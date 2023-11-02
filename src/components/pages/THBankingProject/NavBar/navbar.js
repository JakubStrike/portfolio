import React, { useState } from 'react';
import './navbar.css';
import thbankingLogo from '../../../../assets/logoTHBanking.png';
import homeLogo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import menu from '../../../../assets/menu.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <Link to='/'><img src={thbankingLogo} alt="Logo" className='logo'/></Link>
            <div className="desktopMenu">
                <Link to='/THBanking' className="desktopMenuListItem active">Login</Link>
                <Link to='/THBanking' className="desktopMenuListItem">Register</Link>
            </div>
            <Link to='/'><img src={homeLogo} alt="Logo" className='logo'/></Link>


            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link to='/THBanking' className="listItem" onClick={()=>setShowMenu(false)}>Login</Link>
                <Link to='/THBanking' className="listItem" onClick={()=>setShowMenu(false)}>Password</Link>
            </div>
        </nav>
    )
}

export default NavBar;