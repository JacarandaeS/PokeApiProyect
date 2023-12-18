import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Form.css';

// eslint-disable-next-line react/prop-types
const Form = ({ searchThis }) => {
  const [inputValue, setInputValue] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchThis) {
      fetchData(searchThis);
    }
  }, [searchThis]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`) 
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
  }, []);

  const fetchData = (pokemonName) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error('Error fetching Pokemon:', error))
      .finally(() => setLoading(false));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(inputValue);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (pokemonData && pokemonData.id) {
      const nextPokemonId = pokemonData.id + 1;
      fetchData(nextPokemonId);
      window.scrollTo({
        top: 250,
        behavior: "smooth",
      });
    }
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    if (pokemonData && pokemonData.id) {
      const prevPokemonId = pokemonData.id - 1;
      fetchData(prevPokemonId);
      window.scrollTo({
        top: 250,
        behavior: "smooth",
      });
    }
  };

  const handleChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e);
    setInputValue('')
  };
  

  return (
    <div className='form-space' id='card'>
      <div className="form-body">
        <h2>Search any Pokemon you like or click any of the links under the form :3</h2>

        <form onSubmit={handleSubmit}>
          {loading && <p>Loading...</p>}
          {pokemonData && <Card pokemonData={pokemonData} />}
          <p style={{fontSize:'20px'}}>you can search by the pokemon name or his id</p>
          <input
            type="text"
            placeholder="pikachu, onix, muk..."
            value={inputValue}
            onChange={handleChange}
          />

          <button style={{backgroundColor:""}} type="submit">Search</button>
          <button onClick={handleIncrement}>Next</button>
          <button onClick={handleDecrease}>Prev</button>
          
        </form>
      </div>
    </div>
  );
};

export default Form;