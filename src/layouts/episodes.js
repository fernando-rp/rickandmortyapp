import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  const EPISODES= gql`
  query GetEpisodes{
      episodes{
          results{
            id
            name
            air_date
            episode
          }
      }
  }`;

  function GetEpisodes(){
      const { loading, error, data } = useQuery(EPISODES);
      if (loading) return <h1>Loading...</h1>;
      if (error) return <h1>Error :( </h1>;

      return data.episodes.results.map(episode => (
         
        <div className="col-xl-4 col-log-4 col-md-6 mt-2 b-4">
            <div key={episode.id} className="card bg-dark p-1 h-100">
            <h1>{episode.episode}</h1>
              <div  className="card-body">
                  <h5 className="card-title mb-2">Title: "{episode.name}" </h5>
                  <h6 className="card-subtitle mt-2 mb-2 text-muted">Released: {episode.air_date} </h6>
              </div>
        </div> 
        </div>
      ));
  }

const Episodes=()=>{

    return(
        <body className="d-flex text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
             <Navbar />
        
                <div className="row w-100 mt-4 mb-4 mx-auto">
                    <h4 className="title"> I'm sure that you saw all episodes or maybe not, anyway, you will find each one next:</h4>
                    <ApolloProvider client={client}>
                        <GetEpisodes></GetEpisodes>
                    </ApolloProvider>
                </div>

             <Footer />
            </div>
        </body>
    )


}

export default Episodes;