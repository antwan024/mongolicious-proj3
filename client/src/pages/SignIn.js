import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";

import API from "../utils/API";
import Nav from "../components/Nav";

class SignIn extends Component {

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

    
    // valUser = event  => {
    //     event.preventDefault();
    //     User.find({$or: [
    //       {email: this.state.email},
    //       {password: this.state.password}
    //       ]}), 
    //       function(err, docs) {
    //           if (docs.length){
    //             <Link to={"/dashboard"}/>
    //           }else{
    //               user.save(function(err){
    //                 alert("Incorrect!");
    //               });
    //           }
    //       }

    // };



    
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

            <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">Please Log In:</span>
                      <form>
                  <Input 
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"
                      placeholder="Enter Email:"
                  />
                  <Input 
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      placeholder="Enter Password:"
                  />
                  
                  

                  
                
              </form>
                    </div>
                    <div class="card-action">
                    
                    <Link to={"/dashboard"}>
                    <a href="#">Log In</a>
                    </Link>
                  
                      
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

export default SignIn;


