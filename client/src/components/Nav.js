import React, {Component} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import {BrowserRouter as Router} from "react-router-dom";

class NavbarFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this
      .onClick
      .bind(this);
    this.toggle = this
      .toggle
      .bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand href="/https://www.jcameronjeff.io">
            <strong>JeffCameron.io</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/api/saved">Saved</NavLink>
              </NavItem>

            </NavbarNav>

          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarFeatures;
