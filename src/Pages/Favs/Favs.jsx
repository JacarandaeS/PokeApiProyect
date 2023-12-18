import  { useState, useEffect } from 'react';
import './Favs.css'
const Favs = () => {
  const [localfavs, setLocalFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setLocalFavs(storedFavs);
  }, []);


  const handleDelete = (id) => {
    const updatedFavs = localfavs.filter((fav) => fav.id !== id);
    setLocalFavs(updatedFavs);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  const maped = localfavs.map((fav) => {
    let name = fav.name.charAt(0).toUpperCase() + fav.name.slice(1);
    let img = fav.sprites.front_default;
    let type1 = fav.types[0].type.name;
    let secondTypecheck = fav.types[1] && fav.types[1].type.name;
    let id = fav.id;

    return (
      
      <div key={id} className="fav-card" style={{ fontSize: '40px' }}>
        <div className='title-pic'>
          <h4 className='fav-name'>{name}</h4>
          <img src={img} style={{ width: '160px' }} alt="" />
        </div>

        <div className='fav-description'>
          <p className='desc-p'>{`Type: ${type1}`}</p>
          {secondTypecheck ? (
            <p className='desc-p'>{`Type: ${fav.types[1].type.name}`}</p>
          ) : (
            ' '
          )}
          
          <span className="unfav-btn" onClick={() => handleDelete(id)}>Unfav</span>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 style={{ margin: '180px 0px 0px 20px' }}>
        All the pokemons you faved will be displayed here.
      </h2>
      {localfavs.length > 0 ? <div className='map-container'>{maped}</div> : <h2 style={{margin:'20px'}}>You have no favorites yet.</h2>}
      
    </>
  );
};

export default Favs;
