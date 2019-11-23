import React, { Component } from "react";
import API from "../../utils/API";
import "./styles.css";

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
        <div className="row">
          <div className="col s4"></div>
          <div className="col s4">
            <ul className="collection with-header">
              <li className="collection-header indigo lighten-5">
                Total Points: {this.state.points}
              </li>
            </ul>
          </div>
          <div className="col s4"></div>
        </div>
      </div>
    );
  }
}

export default TotalPoints;
