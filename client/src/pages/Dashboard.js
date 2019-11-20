import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { CalendarDate, Input, FormBtn } from "../components/Form";
import {Dropdown, DropItem} from "../components/List";
import API from "../utils/API";

class Dashboard extends Component {

      state = {
          events: [],
          eventPoints: "",
          summary: "",
          date: "",
          voucherCode: "",
          totalPoints:""
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
      if (this.state.email) {
        API.saveUserEvent({
          email: this.state.email,
          password: this.state.password
        })
          .then(res => this.loadUserEvents())
          .catch(err => console.log(err));
      }
    };

    getPoints = event => {
        event.preventDefault();
        API.addPoints()
        .then(res => this.loadEvents())
        .catch(err => console.log(err));



    };



    render() {
        return (
          <div>
            <h2>Total Points: 0{this.getPoints}</h2>
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
                    <CalendarDate
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        name="date"
                        placeholder="Date:"
                    />

                    <Dropdown>
                        {this.state.events.map(event => (
                            <DropItem key={event._id}>
                              
                                
                                  Need: {event.eventPoints} , {event.summary}
                                
                              
                              {/* <DeleteBtn onClick={() => this.deleteEvent(event._id)} /> */}
                            </DropItem>
                        ))}
                    </Dropdown>
                    

                    <FormBtn 
                        onClick={this.handleFormSubmit}
                    >Commit</FormBtn>
                  
                </form>

                <h2>Points: 0{this.getPoints}</h2>
                <script src="./../src/misc/jquery.js"></script>
            </div>
            </div>
            
        );
    }
}

export default Dashboard;

