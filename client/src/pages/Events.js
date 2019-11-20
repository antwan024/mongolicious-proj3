import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import AchievementCard from "../components/AchievementCard";
import API from "../utils/API";

class Events extends Component {

      state = {
      events: [],
      eventPoints: 0,
      summary: "",
      date: "",
      voucherCode: ""
    };

    componentDidMount() {
      this.loadEvents();
    }

    loadEvents = () => {
      API.getEvents()
        .then(res =>
          this.setState({ events: res.data, eventPoints: 0, summary: "", date: "", voucherCode: "" })
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
          .then(res => this.loadEvents())
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



    render() {
        return (
          <div>
            <h2>Total Points: 0{this.getPoints}</h2>
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
                            <img src="/images/dog.jpg"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                              <i
                                className="material-icons"
                                onClick={() => this.deleteEvent(event._id)}
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
            

        );
    }
}

export default Events;

