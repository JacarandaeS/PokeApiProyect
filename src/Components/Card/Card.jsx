/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({pokemonData}) => {
    const [flipShiny, setFlipShiny] = useState(false)
    const [favs, setFavs] = useState([])

    const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
    const pokemonType = pokemonData.types[0].type.name
    const defaultImage = pokemonData.sprites.other['official-artwork'].front_shiny
    const shinyImage = pokemonData.sprites.other['official-artwork'].front_default
    const secondTypecheck =  (pokemonData.types[1] && pokemonData.types[1].type.name)
    const pokemonHeight = pokemonData.height
    const pokemonAbilitiesCheck = (pokemonData.abilities && pokemonData.abilities.length > 0 )
    const shinyCheck = pokemonData.sprites.other.home.front_shiny
    const id = pokemonData.id
    const stats = pokemonData.stats
    
    const handleFlip = (e) => {
      e.preventDefault();
      setFlipShiny(!flipShiny);
    };
    
    const handleFavorites = (e) => {
      e.preventDefault();
      const pokemonId = pokemonData.id;
      const isAlreadyFavorited = favs.some((fav) => fav.id === pokemonId);
      if (!isAlreadyFavorited) {
        setFavs((prevFavs) => {
          const newFavs = [...prevFavs, pokemonData];
          localStorage.setItem('favs', JSON.stringify(newFavs));
          return newFavs;
        });
      } else {
        alert(`Pokemon with ID ${pokemonId} is already in favorites.`);
      }
    };

    useEffect(() => {
      const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
      setFavs(storedFavs);
      
    }, []);
     
  return (
    <div className="card-container"> 
      <div className='left-side-card'>
        <h2 className='title'>{pokemonName}</h2> 
          <div className='img-background'>  
            {flipShiny ? 
            <img className='img' src={defaultImage}></img>
             : 
             <img className='img' src={shinyImage} alt="" />}
          </div>
      </div>

      <div className='elements'>
        <h2>Types:</h2>
        <h2><Link to={`/typeDetails/${pokemonType}`} className='link-button-card' state={{url: pokemonData.types[0].type.url}}>{` ${pokemonType}`}</Link></h2>
 
       { secondTypecheck ? 
       <h2><Link to={`/typeDetails/${pokemonType}`} className='link-button-card' state={{url: pokemonData.types[0].type.url}}>{` ${pokemonData.types[1].type.name}`}</Link></h2>
          :
          ""
        }
      
        <h2>{` height: ${pokemonHeight}`}</h2>
        <h2 style={{marginTop:"45px"}}>Abilities:</h2>
            {pokemonAbilitiesCheck ?
              pokemonData.abilities.map((ability, index) => (
              <Link
                to={`/pokeDetails/${ability.ability.name}`}
                state={{ abilityUrl: ability.ability.url }}
                key={index}
                className='link-button-card'
                >
                <p>{ability.ability.name}</p>
              </Link>
            )) : <p>No abilities available</p>}
         <p>{`ID: ${id}`}</p>
          
      </div>
      <div className='stats-container'>
        <h2 style={{color:'white', textAlign:'center'}}>Stats:</h2>
        {stats.map((stat, index) =>(
         <h4 style={{color:'white', textAlign:'center'}} key={index}>{`${stat.stat.name} ${stat.base_stat}`}</h4>
        ))}

        <div className='button-div'>
          {
          shinyCheck ?  
          <span className='shiny-button' onClick={handleFlip}>{flipShiny? "Change to defult" : "Change to shiny"}</span> 
          : ""
          }
            <span className='fav-button' onClick={handleFavorites}>Add to favorites</span>
        </div>
      </div>
    </div>
  )
}

export default Card



