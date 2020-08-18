import React from "react";
import "./App.css";
import Header from "./components/MyHeader";
import UserRegisteration from "./containers/UserRegisteration";
import LoginPage from "./containers/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import MovieDetails from "./containers/MovieDetails";
import ProfilePage from "./containers/Profilepage";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={UserRegisteration} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/movies/:id" exact component={MovieDetails} /> 
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
