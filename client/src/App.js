import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Articles from "./pages/Articles";
import SavedPage from "./pages/SavedPage";
import NavbarFeatures from "./components/Nav";
import JumbotronSection from './components/JumbotronSection';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarFeatures/>
          <main>
            <JumbotronSection/>
            <Route path="/" component={Articles}/>
          </main>
          <Route path="/saved" component={SavedPage}/>
          <Route exact path="/saved/:id" component={SavedPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
