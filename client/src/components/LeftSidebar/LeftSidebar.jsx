import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import homeicon from '../../assets/homeicon.png'
import questionsicon from '../../assets/questionsicon.png'
import tagsicon from '../../assets/tagsicon.png'
import usersicon from '../../assets/usersicon.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <div className='side-nav-div'>
            <NavLink to="/" className="side-nav-links" activeClassName="active">
            <img src={homeicon} alt="home" style={{width:"18px", height:"18px"}} />
            <p style={{paddingLeft:"10px"}}>Home</p>    
            </NavLink>
                <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
                    <img src={questionsicon} alt="questions" style={{width:"18px", height:"18px"}} />
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink exact to="/Tags" className="side-nav-links" activeClassName="active">
                <img src={tagsicon} alt="tags" style={{width:"18px", height:"18px"}} />
                    <p style={{paddingLeft:"10px"}}>Tags</p> 
                </NavLink>
                <NavLink exact to="/Users" className="side-nav-links" activeClassName="active">
                <img src={usersicon} alt="home" style={{width:"18px", height:"18px"}} />
                   <p style={{paddingLeft:"10px"}}>Users</p>
                </NavLink>
            </div>

        </nav>
      
    </div>
  )
}

export default LeftSidebar
