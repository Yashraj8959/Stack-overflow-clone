import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import Search from "../../assets/search-solid.svg";
import Avator from "../../components/Avator/Avator";
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    var User = 516;
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
                 <Avator backgroundColor="#009dff"
                px="10px"
                py="5px"
                borderRadius="25%"
                color="white" ><a href='/User' style={{color:"white", textDecoration:"none"}} >Y</a></Avator>
                 <button className='nav-items nav-links'>Log Out</button>
                 </>
            }


                       
            

        </div>
      
    </nav>
  )
}

export default Navbar;