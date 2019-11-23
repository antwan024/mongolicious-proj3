import React, { Component } from "react";

import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav";

import API from "../utils/API";

class NewUser extends Component {

      state = {
      user: [],
      name: "",
      email: "",
      password: "",
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
      if (this.state.email) {
        API.valUser({
          email: this.state.email,
          password: this.state.password
        })
          .then(res => this.loadUser())
          .catch(err => console.log(err));
      }
    };



    render() {
      return (

        <div>
          <Nav />
       
          <div>
            
              {/* <h1>Please sign in:</h1>
              <form>
                  <Input 
                      value={this.state.summary}
                      onChange={this.handleInputChange}
                      name="summary"
                      placeholder="Enter Email:"
                  />
                  <Input 
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      placeholder="Enter Password:"
                  />
                  
                  

                  <FormBtn 
                      onClick={this.handleUserSubmit}
                  >Commit</FormBtn>
                
              </form> */}

              <div class="container center-align">
  <div class="row center-align">
      <div class="col s12 m6 center-align" >
          <div class="card green light-3 center-align">
              <div class="card-content white-text center-align">
                  <span class="card-title">Enter New User Info:</span>
              </div>
              <div class="card-action">

                  <div class="row">
                  <form>
                  <Input 
                      value={this.state.summary}
                      onChange={this.handleInputChange}
                      name="summary"
                      placeholder="Enter Email:"
                  />
                  <Input 
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      placeholder="Enter Password:"
                  />
                  <Input 
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Enter Name:"
                  />
                  
                  

                  <FormBtn 
                      onClick={this.handleUserSubmit}
                  >Send</FormBtn>
                
              </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

              
              <script src="./../src/misc/jquery.js"></script>
          </div>
          </div>
          
      );
  }
}

export default NewUser;

