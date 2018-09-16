import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid="true" collapseOnSelect="true">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem href="/signup">Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem href="/login">Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

export default App;