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

                <div className="container center-align">
    <div className="row center-align">
        <div className="col s12 m6 center-align" >
            <div className="card blue light-3 center-align">
                <div className="card-content white-text center-align">
                    <span className="card-title">Log In</span>
                </div>
                <div className="card-action">

                    <div className="row">
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
                    
                    

                    <Link to={"/dashboard"}>
                    <a href="#">Log In</a>
                    </Link>
                  
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

export default SignIn;

