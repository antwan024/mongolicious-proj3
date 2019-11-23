import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { CardBtn, Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import AchievementCard from "../components/AchievementCard";
import API from "../utils/API";
import Nav from "../components/Nav";
import TotalPoints from "../components/TotalPoints";
import "./styles.css";

class Events extends React.Component {
  state = {
    events: [],
    eventPoints: 0,
    summary: "",
    sponsor: "",
    date: "",
    voucherCode: "",
    totalPoints: 0
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          events: res.data,
          eventPoints: 0,
          summary: "",
          date: "",
          voucherCode: ""
        })
      )
      .catch(err => console.log(err));
  };

  loadUserEvents = () => {
    API.getUserEvents()
      .then(res =>
        this.setState({
          events: res.data,
          eventPoints: res.data.totalEventPoints,
          summary: "",
          date: "",
          voucherCode: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.summary) {
      API.saveEvent({
        summary: this.state.summary,
        date: this.state.date,
        voucherCode: this.state.voucherCode,
        eventPoints: this.state.eventPoints
      })
        // .then(res => this.loadEvents())
        .then(res => this.loadUserEvents())
        .catch(err => console.log(err));
    }
  };

  handleUserSubmit = event => {
    event.preventDefault();
    if (this.state.summary) {
      API.saveUserEvent({
        summary: this.state.summary
      })
        .then(res => this.loadUserEvents())
        .catch(err => console.log(err));
    }
  };

  addPoints = event => {
    event.preventDefault();
    API.addPoints()
      .then(res => this.addPoints())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />

        <h2>Total Points: {this.state.totalPoints}</h2>

        <div className="row">
          {this.state.events.map(event => (
            // <Link to={"/events" + event._id}>
            <div className="col s4">
              <AchievementCard key={event._id}>
                <div className="card-image">
                  <img
                    className="image"
                    src={(() => {
                      switch (event.sponsor) {
                        case "regal":
                          return "/images/regal.png";
                        case "united":
                          return "/images/united.jpg";
                        case "comedyworks":
                          return "/images/comedy.jpg";
                        case "livenation":
                          return "/images/livenation.jpg";
                        case "24 hour":
                          return "/images/24hour.jpg";
                        case "corepower":
                          return "/images/corepower.png";
                        case "whole foods":
                          return "/images/wholefoods.jpg";
                        default:
                          return "/images/best.jpg";
                      }
                    })()}
                  />
                </div>
                <span className="card-title">{event.eventPoints} Points</span>
                {event.summary}

                <a className="btn-floating halfway-fab waves-effect waves-light green lighten-4">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.state.totalPoints =
                        this.state.totalPoints + event.eventPoints;
                      this.props.history.push({
                        pathname: "/events",
                        totalPoints: this.state.totalPoints // your data array of objects
                      });
                      this.deleteEvent(event._id);
                    }}
                  >
                    add
                  </i>
                </a>
              </AchievementCard>
            </div>
          ))}
        </div>
        <script src="../src/misc/jquery.js"></script>
      </div>
    );
  }
}

export default Events;
