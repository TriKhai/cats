import React from 'react'
import styler from './Header.module.css'

export default function Header() {

    // CSS object
    // const navColorA = {
    //     color: 'black'
    // }

    const navBrandFirst = {
        fontSize: '36px'
    }

    const navBrandLast = {
        fontSize: '16px',
        color: '#ff4f81',
        letterSpacing: '3px'
    }

    const navMargin = {
        marginLeft: 'auto',
    }

    const navColorMenu = {
        // color: 'black',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        transition: 'all 0.5s',
    }

    const navItemMenu = {
        margin: '0 15px',
    }



    return (
        <nav className={`navbar navbar-expand-lg container`}>
            <div className={`container-fluid`}>
                <a className={`navbar-brand text-center ${styler.navColorA} ${styler.txtStyle}`} href="/home">
                    <p style={navBrandFirst} className='font-weight-bold mb-0'><i class="fa fa-chess-knight"></i> Web Demo</p>
                    <p style={navBrandLast} className="font-weight-bold">education</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" style={navMargin}>
                    
                            <li className={`${styler.txtStyle} nav-item`} style={navItemMenu}>
                                <a style={navColorMenu} className={`${styler.txtStyle} ${styler.atab} nav-link ${styler.navColorA}`} aria-current="page" href="/home">HOME</a>
                            </li>
                        
                        
                            <li className="nav-item" style={navItemMenu}>
                                <a style={navColorMenu} className={`${styler.txtStyle} ${styler.atab} nav-link ${styler.navColorA}`} href="/about">ABOUT</a>
                            </li>
                        
                        
                            <li className="nav-item" style={navItemMenu}>
                                <a style={navColorMenu} className={`${styler.txtStyle} ${styler.atab} nav-link ${styler.navColorA}`} href="/services">SERVICES</a>
                            </li>
                        
                        <li className="nav-item  dropdown" style={navItemMenu}>
                            <a style={navColorMenu} className={`${styler.txtStyle} ${styler.atab} nav-link ${styler.navColorA}`} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                MORE <i class="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a  className={`dropdown-item ${styler.txtStyle}`} href="/codes">CODES</a></li>
                                <li><a  className={`dropdown-item ${styler.txtStyle}`} href="/texts">TEXTS</a></li>
                                <li><a  className={`dropdown-item ${styler.txtStyle}`} href="/icons">ICONS</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

/* 

    LOGO: glyphsearch
    CLASSNAME: 
        -navbar
        -navbar-expand-lg : responsive  
        -navbar-brand: phần menu, logo
*/