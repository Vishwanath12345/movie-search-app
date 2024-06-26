import React from 'react'
import { useGlobalContext } from './context'

function Movies() {
    const { movie } = useGlobalContext();
  return (
    <>
    {
        movie.map((curMovie)=>{
            return(
                <div>
                    <h2>{curMovie.Title}</h2>
                </div>
            )

        })
    }
    </>
  )
}

export default Movies