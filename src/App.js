import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import players from "./players.json";

class App extends Component {
  
  state = {
    players: players,
    highScore: 0,
    score: 0,
    nonSelectPlayers: players,
    jumbotronPrompt: "Begin by clicking a Yankee"
  };

  

  playerSelect = id => {

    const yankeeClick = this.state.nonSelectPlayers.find(item => item.id === id);
    if(yankeeClick === undefined) {
      this.setState({
        jumbotronPrompt: "Game Over, Try Again",
        highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        score: 0,
        players: players,
        nonSelectPlayers: players
      })
    }
    else{
 
      const newPlayers = this.state.nonSelectPlayers.filter(item => item.id !== id);            
      this.setState({ 
        jumbotronPrompt: "Don't Select a Player Twice",
          score: this.state.score + 1,
          players: players,
          nonSelectPlayers: newPlayers
      });
    }
    this.arrayRearange();
  }
  arrayRearange = () => {
    for (let i = this.state.players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.players[i], this.state.players[j]] = [this.state.players[j], this.state.players[i]];
    }
    this.setState({ players });
  

 
 
}

  render() {
    return (
      <Wrapper>
        <Jumbotron 
        score={this.state.score} 
        jumbotronPrompt={this.state.jumbotronPrompt}
        highScore={this.state.highScore} />

        {this.state.players.map(car => (
          <PlayerCard
            id={players.id}
            image={players.image}
            playerSelect={this.playerSelect}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
