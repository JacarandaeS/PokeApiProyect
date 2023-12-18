
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
      <h3 style={{fontSize:'30px'}}>Contact</h3>
      <ul style={{listStyle:'none'}}>
        <li style={{color:'white', fontSize:'20px'}} ><a style={{ color:'white' }} href="https://www.linkedin.com/in/emilio-navarro-y-scieppaquercia-261402222/" target='blank'> Linkedin </a></li>
        <li style={{color:'white', fontSize:'20px'}} ><a style={{ color:'white' }} href="https://github.com/JacarandaeS?tab=repositories">Github</a></li>
        <li style={{color:'white', fontSize:'20px'}} ><a style={{ color:'white' }} href="mailto:emi.navarro90@gmail.com?subject=Contacto FrontEnd &body=Hola Emilio, vi tu trabajo y me gustaria contactar con vos.">Mandame un mail n.n</a></li>
      </ul>
      </div>
      <div>
      <p className='footer-author' style={{ fontSize:'20px' }}>Made by Emilio Navarro y Scieppaquercia.</p>
      </div>
     
      
    </div>
  )
}

export default Footer