import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to="/" className="side-nav-links" activeClassName="active">
            <p>Home</p>    
            </NavLink>
            <div className='side-nav-div'>
                <div>PUBLIC</div>
                <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
                    <img src={Globe} alt="globe" />
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink exact to="/Tags" className="side-nav-links" activeClassName="active">
                    <p>Tags</p> 
                </NavLink>
                <NavLink exact to="/Users" className="side-nav-links" activeClassName="active">
                   <p>Users</p>
                </NavLink>
            </div>

        </nav>
      
    </div>
  )
}

export default LeftSidebar
