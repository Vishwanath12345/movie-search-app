
import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
  const [isLoading , setIsLoading] = useState(true);
 const [movie,setMovie] = useState([]);
 const [isError ,setIsError]= useState({show : "false" , msg :""})

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=5bb6c980&s=titanic`

  useEffect(()=>{
    getMovies(API_URL);
  },[])

  const getMovies = async(url) =>{
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if(data.Response === "True"){
        setIsLoading(false);
        setMovie(data.Search);
      }
      else{
        setIsError({
          show:true ,
          msg : data.error,
        })
      }
      
      
    } catch (error) {
      console.log(error);
    }
      
  }

  return <AppContext.Provider value={{isLoading,movie,isError}}>
    {children}
  </AppContext.Provider>  
}

const useGlobalContext = ()=>{
 return  useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}