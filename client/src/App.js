import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Articles from "./pages/Articles";
import SavedPage from "./pages/SavedPage";
import NavbarFeatures from "./components/Nav";
import JumbotronSection from "./components/JumbotronSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarFeatures />
          <main className="container">
            <JumbotronSection />
            <Route path="/" component={Articles} />
          </main>
          <Route exact path="/saved" component={SavedPage} />
          <Route exact path="/saved/:id" component={SavedPage} />
        </div>
      </Router>
    );
  }
}

export default App;
