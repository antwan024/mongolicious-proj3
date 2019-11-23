import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { CalendarDate, Input, FormBtn } from "../components/Form";
import { Dropdown, DropItem } from "../components/List";
import Nav from "../components/Nav";
import API from "../utils/API";
import life from "../life.png";

class Dashboard extends Component {
  state = {
    events: [],
    eventPoints: "",
    summary: "",
    sponsor: "",
    date: "",
    voucherCode: "",
    totalPoints: ""
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
          sponsor: "",
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
        sponsor: this.state.sponsor,
        eventPoints: this.state.eventPoints
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  handleUserSubmit = event => {
    event.preventDefault();
    if (this.state.email) {
      API.saveUserEvent({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadUserEvents())
        .catch(err => console.log(err));
    }
  };

  addPoints = event => {
    event.preventDefault();
    API.addPoints()
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
        <img className = "main" src={life} alt="A Pic" />
        </div>
        <div className="container">
          <div>
            <h3>Total Points: {this.addPoints}</h3>
            <div className="col s9 m9">
              <form>
                <Input
                  value={this.state.summary}
                  onChange={this.handleInputChange}
                  name="summary"
                  placeholder="Enter Completed Event:"
                />
                <Input
                  value={this.state.eventPoints}
                  onChange={this.handleInputChange}
                  name="eventPoints"
                  placeholder="Enter Points Earned:"
                />
                <Input
                  value={this.state.sponsor}
                  onChange={this.handleInputChange}
                  name="sponsor"
                  placeholder="Enter Sponsor:"
                />

                <select>
                  {this.state.events.map(event => (
                    <option key={event._id}>
                      {event.eventPoints} points for {event.summary}
                      {/* <DeleteBtn onClick={() => this.deleteEvent(event._id)} /> */}
                    </option>
                  ))}
                </select>

                <FormBtn onClick={this.handleFormSubmit}>Commit</FormBtn>
              </form>
              <div>
              <form onSubmit={this.handleInputChange}>
                  <label>
                    Pick your favorite flavor:
                    <select onChange={this.handleInputChange}>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
              </form>
              </div>

              <script src="./jquery"></script>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
