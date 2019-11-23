import React, { Component } from "react";

class TotalPoints extends Component {
  state = {
    points: 0
  };

  componentDidMount() {
    this.getPoints();
  }

  getPoints = () => {
    API.addPoints()
      .then(res =>
        this.setState({
          points: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Total Points: {this.state.points}</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default TotalPoints;
