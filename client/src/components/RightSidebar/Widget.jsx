import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='11px' />
                <p>How Stack Overflow is partnering with Google to encourage socially...</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='11px' />
                <p>Your whole repo fits in the context window</p>
            </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width='11px'  />
                <p>Our partnership with Google and commitment to socially responsible AI</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width='11px' />
                <p>Shifting the data dump schedule: A proposal</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blackLogo} alt="logo" width='11px' />
                <p>2024 Community Moderator Election Results</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blackLogo} alt="logo" width='11px' />
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
        </div>

        <h4>Hot Meta Post</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='11px' />
                <p>Why are 'too localized' questions not welcome?</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width='11px' />
                <p>Question with many answers (that received hundreds of upvotes) which all...</p>
            </div>
        </div>
      
    </div>
  )
}

export default Widget
