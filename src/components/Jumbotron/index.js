import React from "react";
import './style.css';

// Navbar Score Board
function Jumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 class="display-3">Yankee Player Memory</h1>
        <hr class="my-2" />
        <p class="lead">Choose a Yankee but don't repeat choice</p>
        <p>
          <span>Your Score: {props.score} | Top Score: {props.highScore} | {props.jumbotronPrompt}</span>
        </p>

      </div>
    </div>

  );
}

export default Jumbotron;