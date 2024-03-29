import React from 'react'
import './HomeMainbar.css'
import { Link, useLocation } from 'react-router-dom'
import Questions from './Questions'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  var questionsList = [
    {
      id: 1,
      Votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 1,
      Votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 1,
      Votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
    }
  ]

  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? 
          <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <Link to ='/AskQuestion' className='ask-btn'>Ask Question</Link>
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
