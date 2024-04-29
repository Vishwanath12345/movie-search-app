
import './App.css'
import SingleMovie from './components/SingleMovie.jsx'
import Home from './components/Home.jsx'
import { Routes , Route } from 'react-router-dom'
import Error from './components/Error.jsx'
function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element = {<SingleMovie/>}></Route>
      <Route path='*' element={<Error/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
