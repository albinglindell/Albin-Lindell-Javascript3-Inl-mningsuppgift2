import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"



function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = ()=>{
        if(window.scrollY > 110){
            setNavbar(true)
            if(window.scrollY > 50){
                setNavbar(true)
            }
        }else{
            setNavbar(false)

        }
    }

    window.addEventListener("scroll", changeBackground)

  return (
<header className={navbar ? "Header active" : "Header"}>
    <div className="HeaderTop">
    <div className="HeaderStart">
    <Link to="/">
    <img className='image' src="https://static.flashback.org/img/2017/logo-text-only.png" alt="HeaderLogo" />
    </Link>
    <div className="infoFlex gray">
    <p className="HeaderInfo"><span className='bold'>22 550</span> besökare online</p>
    <p className="HeaderInfo"><span className='bold'>1 480 742</span> medlemmar</p>
    <p className="HeaderInfo"><span className='bold'>76 377 132</span> inlägg</p>
    </div>
    </div>
    <div className="HeaderEnd">
        <div>
           
                <ul className="HeaderEndBtn">
                    <li>
                    <a href="#" className='gray'> BLI MEDLEM</a>
                    </li>
                    <li>
                    <a href="#" className='gray'> LOGGA IN</a>
                    </li>
                </ul>
            
        </div>
        <p className='swishComponent gray'><span className='bold'>Stöd Flashback</span> Swish: <span className='bold'>070 006 25 08</span></p>
    </div>
    </div>
    <nav className='HeaderNavigation'>
        <ol className='NavigationText'>
            <li>
                <p>AVDELNINGAR</p>
            </li>
            <li>
                <p>AKTUELLA ÄMNEN</p>
            </li>
            <li>
                <p>NYA ÄMNEN</p>
            </li>
            <li>
                <p>NYA INLÄGG</p>
            </li>
            <li>
                <p>TAGGAR</p>
            </li>
            <li>
                <p>REGLER</p>
            </li>
            <li>
                <p>SÖK</p>
            </li>
        </ol>
    </nav>
</header>
    )
}

export default Header