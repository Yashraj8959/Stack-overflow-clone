import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import Search from "../../assets/search-solid.svg";
import Avator from "../../components/Avator/Avator";
import './Navbar.css';
const Navbar = () => {
    var User = null;
  return (
    <nav>
        
        <div className='navbar'>
            <Link to="/" className='nav-items nav-logo '><img src={Logo} alt="logo" /></Link>
            <Link to="/" className='nav-items nav-btn '>About</Link>
            <Link to="/" className='nav-items nav-btn '>Products</Link>
            <Link to="/" className='nav-items nav-btn '>For teams</Link>
            
            
            <form> 
                <input type="text" placeholder="Search..."/>  
                <img src={Search} alt="search" width={18} className='search-icon'/>
            </form>
            {
                User === null ?
                 <Link to='/Auth' className='nav-items nav-links'>Log In</Link> :
                 <>
                 <Avator backgroundColor="#009dff"
                px="10px"
                py="5px"
                borderRadius="25%"
                color="white" ><Link to='/User' style={{color:"white", textDecoration:"none"}} >Y</Link></Avator>
                 <button className='nav-items nav-links'>Log Out</button>
                 </>
            }


                       
            

        </div>
      
    </nav>
  )
}

export default Navbar;
