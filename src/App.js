import React, { Component } from 'react';
import "./main.css"

class App extends Component {
  state = {
    count: 0,
    likeButton: "likes"
  }

  increaseLikes = (e) => {
    if(this.state.count === 0) {
      this.setState({count: this.state.count + 1, likeButton: 'like'}) 
    } else {
      this.setState({count: this.state.count + 1, likeButton: 'likes'})
    }
  }


  render(){
    return (
      <div className="App">
        <button id="likeButton" onClick= {this.increaseLikes}>
        {this.state.count} {this.state.likeButton}
        </button>

      </div>
    );
  }
}
export default App;