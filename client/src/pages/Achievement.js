import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import AchievementCard from "../components/AchievementCard";
import Nav from "../components/Nav";
import Events from "./Events";

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

  render() {
    const { totalPoints } = this.props.location;
    return (
      <div>
        <Nav />
<<<<<<< HEAD:client/src/pages/Achievement.js
        <h2>Total Points:</h2>
=======
        <img src={reward} alt="Achievement Pic" />
        <div className="container">
        <h2>Total Points: {totalPoints}</h2>
>>>>>>> db8780a97e233cc44eb2a902bd93f64e1684fe94:client/src/pages/Rewards.js
        <div className="row">
          <div className="col s9 m9">
            {this.state.achievements.map(achievement => (
              <Link to={"/achievements/" + achievement._id}>
                <AchievementCard key={achievement._id}>
                  <div className="card-image">
                    <img src="/images/wellness.jpeg" />
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                      <i
                        className="material-icons"
                        onClick={() => this.deleteAchievement(achievement._id)}
                      >
                        add
                      </i>
                    </a>
                  </div>
                  <span className="card-title">
                    Use {achievement.achievementPoints} Points
                  </span>
                  {achievement.summary}
                </AchievementCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Achievement;
