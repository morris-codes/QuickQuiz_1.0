import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='logo'>
        <Link to="/"><img src="/quick-logo.png" alt="" /></Link>
    </div>
  )
}

export default Header