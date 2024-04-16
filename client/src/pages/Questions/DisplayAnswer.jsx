import React from 'react'
import { Link } from 'react-router-dom'
import QuestionsDetails from './QuestionsDetails'
import Avator from '../../components/Avator/Avator'
const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className="display-ans" key={ans._id}>
                <p>{ans.answerBody}</p>
                <div className="question-actions-user">
                    <div>
                        <button type='button'>Share</button>
                        <button type='button'>Delete</button>
                    </div>
                    <div>
                        <p>answered {ans.answeredOn}</p> 
                        <Link to={`/User/${question.userId}`} className="user-link" style={{ color: "#0086d8" }} >
                                                <Avator backgroundColor="green" px="8px" py="5px" borderRadius="20%">{ans.userAnswered.charAt(0).toUpperCase()}</Avator>
                                                <div>{ans.userAnswered}</div>
                        </Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
