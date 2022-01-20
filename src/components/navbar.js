import React from "react";

const Navbar = ()=>{

    return(
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">Rick and Morty</h3>
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