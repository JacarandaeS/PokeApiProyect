import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PokeDetails = () => {
  const location = useLocation();
  const { abilityUrl } = location.state || {};
  const [abilityData, setAbilityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (abilityUrl) {
          const response = await fetch(abilityUrl);
          const data = await response.json();
          setAbilityData(data);
        }
      } catch (error) {
        console.error('Error fetching ability data:', error);
      }
    };
    

    fetchData();
  }, [abilityUrl]);
  console.log(abilityData)

  if (!abilityData) {
    return <div style={{marginTop:"100px"}}>Loading ability data...</div>;
  }

  return (
    <div style={{margin: "120px 0px 0px 40px"}}>
      <h2>Name: {abilityData.name}</h2>
      <h3>Description: <br /> {abilityData.effect_entries[1].effect}</h3>
     
      <h2>Available with:</h2>
      
      {abilityData.pokemon && abilityData.pokemon.length > 0 ? (
        <ul>
          {abilityData.pokemon.map((pokemon, index) => (
            <li key={index}>{pokemon.pokemon.name}</li>
          ))}
        </ul>
      ) : (
        <p>No Pokémon available</p>
      )}
      
    </div>
  );
};

export default PokeDetails;