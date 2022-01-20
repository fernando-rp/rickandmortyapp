import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Home = ()=>{

    return(
        <body className="d-flex text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
             <Navbar />
                <div className="box px-3">
                    <h1 className="title mt-4">¡Welcome to Rick and Morty App!</h1>
                    <p className="lead">Discover the characters, episodes and more</p>
                    <div className="d-flex flex-column">
                        <a role="button" className="btn btn-outline-info mt-2 w-40 mx-auto" href="/characters">I want to know the characters</a>
                        <a role="button" className="btn btn-outline-info mt-2 mb-4 w-40 mx-auto" href="/episodes">I want to know the episodes</a>
                        
                    </div>
                 
                </div>
             <Footer />
            </div>
        </body>
    )
}

export default Home;