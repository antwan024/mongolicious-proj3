import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { CardBtn, Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import AchievementCard from "../components/AchievementCard";
import API from "../utils/API";
import Nav from "../components/Nav";

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
          eventPoints: 0,
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

        <div>
          <h2>Total Points: {this.state.totalPoints}</h2>
          <div className="col s6 m6">
            <form>
              <Input
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary (required)"
              />
              <Input
                value={this.state.eventPoints}
                onChange={this.handleInputChange}
                name="points"
                placeholder="Enter points:"
              />

              <FormBtn onClick={this.handleFormSubmit}>Commit!</FormBtn>
            </form>
          </div>

          <div>
   
            <h2>Total Points: {this.state.totalPoints}</h2>
            <div className="col s6 m6">
                <form>
                    <Input 
                        value={this.state.summary}
                        onChange={this.handleInputChange}
                        name="summary"
                        placeholder="Summary (required)"
                    />
                    <Input 
                        value={this.state.eventPoints}
                        onChange={this.handleInputChange}
                        name="points"
                        placeholder="Enter points:"
                    />
                    
                    <FormBtn 
                        onClick={this.handleFormSubmit}
                    >Commit!</FormBtn>
                  
                </form>
            </div>

            <div>
                <div className="row">
                  <div className="col s12 m12">
                    {this.state.events.map(event => (
                      // <Link to={"/events" + event._id}>
                      <Link to={"/events"}>
                        <AchievementCard key={event._id}>
                          <div className="card-image">
                            {/* <img src="/images/dog.jpg"/> */}
                            {/* <img src =  {event.sponsor == "regal" ? "/images/dog.jpg" : "/images/best.jpg"}/> */}
                            <img src =  
                                        {
                                          (() => {
                                              switch (event.sponsor) {
                                                case "regal": return "/images/dog.jpg";
                                                case "united": return "/images/wellness.jpeg";
                                                case "comedyworks":  return "/images/comedy.jpg";
                                                default:      return "/images/best.jpg";
                                              }
                                          })()
                                        }
                            />
                           
                            
                            
                            />
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                              <i
                                className="material-icons"
                                onClick={() => {
                                                  this.state.totalPoints = this.state.totalPoints + event.eventPoints;
                                                  this.props.history.push({
                                                    pathname: '/achievements',
                                                    totalPoints: this.state.totalPoints // your data array of objects
                                                  })
                                                  // this.deleteEvent(event._id)
                                               }
                                        }
                              >
                                add
                              </i>
                            </a>
                            
                          </div>
                          <span className="card-title">
                          {event.eventPoints} Points
                          </span>
                          {event.summary}
                        </AchievementCard>
                      </Link>
                    ))}
                  </div>
                </div>

            </div>
          </div>
        </div>
        <script src="../src/misc/jquery.js"></script>
      </div>
    );
  }
}

export default Events;
