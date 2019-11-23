import React, { Component } from "react";

class TotalPoints extends Component {
  state = {
    points: 0
  };
  render() {
    return (
      <div>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>TotalPoints: {this.state.points}</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default TotalPoints;
