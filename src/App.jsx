
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Favs from './Pages/Favs/Favs'
import Home from './Pages/Home/Home'
import PokeDetails from './Pages/PokeDetails/PokeDetails'
import TypeDetails from './Pages/typeDetails/typeDetails'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Favs" element={<Favs/>} ></Route>
        <Route path="/pokeDetails/:abilityName" element={<PokeDetails/>} />
        <Route path="/typeDetails/:pokemonType" element={<TypeDetails/>} />
      </Routes>
     

    </>
  )
}

export default App
