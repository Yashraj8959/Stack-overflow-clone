import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./questions.css";
import Avator from "../../components/Avator/Avator";
import DisplayAnswer from "./DisplayAnswer";

const QuestionsDetails = () => {
//   const id = "1";
  const {id} = useParams();
  var questionsList = [
    {
      _id: "1",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Yash",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downvote} alt="" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avator
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="20%"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avator>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Enter Your Answer"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="review-btn"
                      value="Post Your Answer"
                    />
                  </form>
                </section>
                <p>
                  Browse other Question tagged
                  {question.questionTags.map((tag) => (
                    <Link to="/Tags" key={tag} className="ans-tags">
                      {tag}
                    </Link>
                  ))}{" "}
                  or
                  <Link
                    to="/AskQuestion"
                    style={{ textDecoration: "none", color: "#009dff" }}
                  >
                    <p> Ask your own question.</p>
                  </Link>
                </p>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
