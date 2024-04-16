import React from 'react'
import './HomeMainbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  var questionsList = [
    {
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "kumar",
                answeredOn: "jan 2",
                userId: 2
            }
        ]
    }
];

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate();
  
  const checkAuth = () => {
    if(user === null) {
      alert("Please login or signup to ask a question") 
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? 
          <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ? <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} questions</p>
            <>
            <QuestionList questionsList = {questionsList} />
            </>
            
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
