import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import AchievementCard from "../components/AchievementCard";
import Nav from "../components/Nav";
import TotalPoints from "../components/TotalPoints";
import "./styles.css";

let styles = {
  float: "right"
};

class Achievement extends Component {
  state = {
    achievements: [],
    type: "",
    achivementPoints: 0,
    summary: "",
    date: "",
    earned: ""
  };

  componentDidMount() {
    this.loadAchievements();
  }

  loadAchievements = () => {
    API.getAchievements()
      .then(res =>
        this.setState({
          achievements: res.data,
          type: "",
          achievementPoints: 0,
          summary: "",
          date: "",
          earned: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteAchievement = id => {
    API.deleteAchievement(id)
      .then(res => this.loadAchievements())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addPoints = () => {
    API.addPoints()
      .then(res =>
        this.setState({
          points: res.data
        })
      )
      .catch(err => console.log(err));
  };

  onClickAction = id => {
    this.deleteAchievement(id);
    this.addPoints();
  };

  render() {
    // const { totalPoints } = this.props.location;
    return (
      <div>
        <Nav />

        <TotalPoints />

        <div className="row">
          {this.state.achievements.map(achievement => (
            <Link to={"/achievements/" + achievement._id}>
              <div className="col s4">
                <AchievementCard key={achievement._id}>
                  <div className="card-image">
                    <img src="/images/wellness.jpeg" />
                  </div>
                  <a className="btn-floating halfway-fab waves-effect waves-light green lighten-4">
                    <i
                      className="material-icons"
                      onClick={() => this.onClickAction(achievement._id)}
                      style={styles}
                    >
                      add
                    </i>
                  </a>
                  <span className="card-title achievement">
                    Use {achievement.achievementPoints} Points
                  </span>
                  {achievement.summary}
                </AchievementCard>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Achievement;
