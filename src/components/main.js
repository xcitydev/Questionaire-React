import "../App.css";
import down from "../assets/tip/DEGENLOGO.png";
import React from "react";
import { Link } from "react-router-dom";
const main = () => {
  return (
    <>
      <main className="letg">
        <header className="header">
          <h1>Welcome to DegenSweepers</h1>
        </header>
        <div className="start">
          <p>
            We are the DEGENS of Solana, We are the GOATS 🐐 For true Degens, BY
            true Degens.
          </p>
          <br />
          <p>Complete the quiz to join URKANN ARMY</p>
          <h2 className="cre">
            <strong>GrindNfails#5583</strong>
          </h2>
        </div>
        <div className="apes">
          <div className="ape">
            <img src={down} alt={"A pic"} />
          </div>
        </div>
        <div className="items">
          <Link to="/algosigner" id="g">
            Take Quiz
          </Link>
        </div>
      </main>
    </>
  );
};

export default main;
