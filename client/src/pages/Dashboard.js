import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { CalendarDate, Input, FormBtn } from "../components/Form";
import {Dropdown, DropItem} from "../components/List";
import Nav from "../components/Nav";
import API from "../utils/API";
import life from "../life.png";

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

    addPoints = event => {
        event.preventDefault();
        API.addPoints()
          .then(res => this.loadEvents())
          .catch(err => console.log(err));



    };



    render() {
        return (
          <div>

            <img src={life} alt="A Pic"/>
            <div className="container">

             <Nav /> 
          
          <div>
           
            <h2>Total Points: {this.addPoints}</h2>
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
                              
                                
                                {event.eventPoints} points for {event.summary}
                                
                              
                              {/* <DeleteBtn onClick={() => this.deleteEvent(event._id)} /> */}
                            </DropItem>
                        ))}
                    </Dropdown>
                    

                    <FormBtn 
                        onClick={this.handleFormSubmit}
                    >Commit</FormBtn>
                  
                </form>

                <script src="./../src/misc/jquery.js"></script>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Dashboard;

