import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Achievement from "./pages/Achievement";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import dashboard from "./pages/dashboard";
import Events from "./pages/Events";
import SignIn from "./pages/SignIn";
import "./App.css";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <Router>
      <div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/dashboard" component={dashboard} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/user/:id" component={Events} />
            <Route exact path="/user/:id" component={SignIn} />
            <Route exact path="/achievements" component={Achievement} />
            <Route exact path="/achievements/:id" component={Achievement} />
            <Route component={NoMatch} />
          </Switch>
          <script src="./../src/misc/jquery.js"></script>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
