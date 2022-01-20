import React, { useState } from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  const CHARACTERS= gql`
  query GetCharacters{
      characters{
          results{
            id
            name
            image
            status
            gender
            species
          }
      }
  }`;
 

  function GetCharacters(){
    const [searchCharacter,handleSearch]=useState("");  
    const { loading, error, data } = useQuery(CHARACTERS);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error :( </h1>;

      return (
          <div className="row">
              <form className="w-80 mx-auto">
                  <input className="form-control me-2 mb-4" type="text" placeholder="Type the name of your favorite character..." aria-label="Search" onChange={event => { handleSearch(event.target.value) }} />
              </form>

              {data.characters.results.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase())

                  //         (val)=>{
                  // if(val.name.toLowerCase().includes(searchCharacter.toLowerCase())){
                  //     return <p>que pasa</p>
                  // }
              ).map(character => {
                  return (
                      <div className="col-xl-4 col-log-4 col-md-6 mt-2 b-4">
                          <div key={character.id} className="card bg-dark p-1 h-100">
                              <img src={character.image} alt={character.image} className="card-img-top "></img>
                              <div className="card-body">
                                  <h5 className="card-title">{character.name} </h5>
                                  <h6 className="card-subtitle mb-2 text-muted">Status: {character.status} </h6>
                                  <p className="card-text">{character.name} is a {character.gender} {character.species} </p>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
      );
  }

const Character=()=>{
    return(
        <body className="d-flex text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
             <Navbar />     
                <div className="row w-100 mt-4 mb-4 mx-auto">
                    <h3 className="title">Search your favorite character:</h3>
                    
                    <ApolloProvider client={client}>
                        <GetCharacters></GetCharacters>
                    </ApolloProvider>
                </div>
             <Footer />
            </div>
        </body>
    )


}

export default Character;