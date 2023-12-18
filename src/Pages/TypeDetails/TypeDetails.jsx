import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TypeDetails = () => {
  const location = useLocation();
  const { url: typeUrl } = location.state || {};
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeUrl) {
          const response = await fetch(typeUrl);
          const data = await response.json();
          setTypeData(data);
        }
      } catch (error) {
        console.error('Error fetching type data:', error);
      }
    };

    fetchData(); 
  }, [typeUrl]);
  
  console.log(typeData)

  return (
    <div >
    
      {typeData ? (
        <div style={{width:'100%', height:'400px', margin:'200px'}}>
          <h2>{typeData.name}</h2>
          <p>{typeData.generation.name}</p>
          <p>theres is no really anything cool to display but it does make a good example to practice lol</p>
          <p>takes double damage from</p>
          <p>{typeData.damage_relations.double_damage_from[0].name}</p>
        {/* {typeData.move && typeData.move.lenght > 0 ?} */}


        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TypeDetails;



