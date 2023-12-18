//import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  function goUp(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div onClick={goUp} className="container">
     <div className='bluedot'></div> 
     <div className='dots' id='red'></div>
     <div className='dots' id='yellow'></div>
     <div className='dots' id='green'></div>
     <Link to='/' className='linkbutton'><h2>Home</h2></Link>
     <Link to="/Favs" className='linkbutton'><h2>Favs</h2></Link>
     
   </div>
  )
}

export default Navbar