import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
    const user = 1;
  return (
    <>
       {
        user === null ? 
        alert("Please login to ask a question") :
         <div className="ask-question">

         </div>
       }
    </>
  )
}

export default AskQuestion
