import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  userHasAuthenticated(authenticated) {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout(event) {
    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

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
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem href="/signup">Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem href="/login">Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;