import React from "react";
import logo from "../img/logo.png"

const Navbar = ()=>{

    return(
        <header className="mb-auto">
            <div>
                <img src={logo} className="logo image float-md-start mb-0" alt="logo"/>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/episodes">Episodes</a>
                    <a className="nav-link" href="/characters">Characters</a>
                    <a className="nav-link" href="/character">Character</a>

                </nav>
            </div>
        </header>
    )
}

export default Navbar;