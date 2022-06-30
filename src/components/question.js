import React, { useState } from "react";

import gif16 from "../assets/tip/collab.png";
import pic16 from "../assets/tip/urkanarmy.png";
import pic15 from "../assets/tip/ryuk.png";
import pic14 from "../assets/tip/outof.png";
import pic13 from "../assets/tip/urkann.png";
import pic12 from "../assets/tip/sweep.png";
import down from "../assets/tip/DEGENLOGO.png";
import broom from "../assets/tip/broom.png";
import farm from "../assets/tip/farm.png";
import degods from "../assets/tip/degods.png";
import { Link } from "react-router-dom";
const Algosigner = () => {
  const questions = [
    {
      pic: down,
      questionText: "Who is a DEGEN?",
      answerOptions: [
        {
          answerText:
            "A gambler who has the tendency to stake large amounts of cash into a project without the knowledge to back it up",
          isCorrect: true,
        },
        { answerText: "A professional Crypto Trader", isCorrect: false },
      ],
    },
    {
      pic: degods,
      questionText: "What was our first collab?",
      answerOptions: [
        { answerText: "Trippin Ape", isCorrect: false },
        { answerText: "DeGods", isCorrect: true },
        { answerText: "Okay Bears", isCorrect: false },
      ],
    },
    {
      pic: pic12,
      questionText: "What do we do for a living?",
      answerOptions: [
        { answerText: "Spam nonstop", isCorrect: false },
        {
          answerText: "Sweep and Raid",
          isCorrect: true,
        },
        {
          answerText: "Dance on tiktok",
          isCorrect: false,
        },
        { answerText: "Move Aimlessly", isCorrect: false },
      ],
    },
    {
      pic: pic13,
      questionText: "Who is our leader?",
      answerOptions: [
        { answerText: "Urkann", isCorrect: true },
        { answerText: "Elon musk", isCorrect: false },
        { answerText: "David", isCorrect: false },
        { answerText: "Slatticus", isCorrect: false },
      ],
    },
    {
      pic: pic14,
      questionText: "What does it mean to Urkann?",
      answerOptions: [
        {
          answerText: "To paperhand",
          isCorrect: false,
        },
        { answerText: "To buy any NFTs", isCorrect: false },
        {
          answerText:
            "To savagely sweep a collection of NFTs that have potential",
          isCorrect: true,
        },
        { answerText: "To sleep", isCorrect: false },
      ],
    },
    {
      pic: pic15,
      questionText: "Who is degensweepers Discord security analyst?",
      answerOptions: [
        { answerText: "Khad", isCorrect: false },
        { answerText: "Ryuk", isCorrect: true },
        { answerText: "Urkann", isCorrect: false },
        { answerText: "Farmer D", isCorrect: false },
      ],
    },
    {
      pic: pic16,
      questionText: "Who is degensweepers Marketing Expert?",
      answerOptions: [
        { answerText: "Brian Hammers", isCorrect: true },
        { answerText: "Ryuk", isCorrect: false },
        { answerText: "FarmerD", isCorrect: false },
        { answerText: "Carmenine", isCorrect: false },
      ],
    },
    {
      pic: broom,
      questionText:
        "Someone said he/she was going to make a Broom tatoo at 1k twitter followers, who was that?",
      answerOptions: [
        { answerText: "Brian", isCorrect: false },
        { answerText: "Khad", isCorrect: false },
        { answerText: "Carmenine", isCorrect: true },
        { answerText: "Damasta", isCorrect: false },
      ],
    },
    {
      pic: farm,
      questionText: "What was degensweepers second Collab?",
      answerOptions: [
        { answerText: "DeGods", isCorrect: false },
        { answerText: "BlockSmith", isCorrect: false },
        { answerText: "Trippin Ape", isCorrect: false },
        { answerText: "CetsOnCreck", isCorrect: true },
      ],
    },
    {
      pic: farm,
      questionText: "Who is FarmerD?",
      answerOptions: [
        { answerText: "Farmer", isCorrect: false },
        { answerText: "Hangout Dao collab manager", isCorrect: false },
        { answerText: "Degen broom designer", isCorrect: false },
        { answerText: "Degen Project manager", isCorrect: true },
      ],
    },
    {
      pic: broom,
      questionText: "Whats the name of Urkann army?",
      answerOptions: [
        { answerText: "UrkannArmy", isCorrect: true },
        { answerText: "Degen Army", isCorrect: false },
        { answerText: "Farmer Army", isCorrect: false },
        { answerText: "Damasta Army", isCorrect: false },
      ],
    },
    {
      pic: gif16,
      questionText: "Who said this 'I will always stand by my troops'?",
      answerOptions: [
        { answerText: "Brian", isCorrect: false },
        { answerText: "Khad", isCorrect: false },
        { answerText: "Urkann", isCorrect: true },
        { answerText: "Damasta", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [discordId, setdiscordId] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      const discord = prompt("Enter your discord Id");
      setdiscordId(discord);
      console.log(discordId);
    }
  };

  return (
    <>
      <div className="go">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <div className="fia">
              You are{" "}
              {score === 11 ? "official a True degen" : "Not yet a true degen"}{" "}
            </div>
            <div id="dis" className="fiaa">
              {"Congratulations " + discordId}
            </div>
            <div className="home">
              <Link to="/" id="g">
                Go Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="le">
                <img src={questions[currentQuestion].pic} alt="A pic" />
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Algosigner;
