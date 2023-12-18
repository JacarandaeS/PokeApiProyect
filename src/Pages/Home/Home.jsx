import  { useEffect, useState } from 'react';
import Form from '../../Components/Form/Form';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Home.css';

const Home = () => {
  const [randomPokes, setRandomPokes] = useState([]);
  const [searchThis, setSearchThis] = useState("")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${Math.floor(Math.random() * 1200)}`)
      .then((res) => res.json())
      .then((data) => setRandomPokes(data.results));
  }, []);

  function handleButton(e) {
    e.preventDefault()
    const selectedPokemon = e.target.textContent;
    setSearchThis(selectedPokemon); 
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }
  
  let mapedArray = randomPokes.map((poke) =>
  <a href="/#card" className='poke-button' onClick={handleButton} key={poke.id}>{poke.name}</a>)

  return (
    <>
      <Header/>
      <Form searchThis={searchThis} />               
        <div className='links'>
          {mapedArray}
        </div>
      <Footer />
    </>
  );
};

export default Home;