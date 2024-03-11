import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import Search from "../../assets/search-solid.svg";
import Avator from "../../components/Avator/Avator";
import './Navbar.css';
const Navbar = () => {
    var User = null;
  return (
    <nav>
        
        <div className='navbar'>
            <a href="/" className='nav-items nav-logo '><img src={Logo} alt="logo" /></a>
            <a href='/' className='nav-items nav-btn '>About</a>
            <a href='/' className='nav-items nav-btn '>Products</a>
            <a href='/' className='nav-items nav-btn '>For teams</a>
            

            <form> 
                <input type="text" placeholder="Search..."/>  
                <img src={Search} alt="search" width={18} className='search-icon'/>
            </form>
            {
                User === null ?
                 <a href='/Auth' className='nav-items nav-links'>Log In</a> :
                 <>
                 <a href='/' ><Avator>Y</Avator></a>
                 <button>Log Out</button>
                 </>
            }


                       
            

        </div>
      
    </nav>
  )
}

export default Navbar;
