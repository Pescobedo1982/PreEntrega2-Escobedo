import React from 'react'
import Carrito from './Carrito.jsx';
import Logos from '../img/Logos.png';

const Navbar = () => {


  return (
    <nav className='navbar'>
      
      <img className='logo' src={Logos} />
      <a>Nosotros</a>
      <a>Productos</a>
      <a>Contacto</a>
      <a><Carrito/></a>
    
    </nav>
    
)
}

export default Navbar