import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from './components/Footer'
function App() {

  const date = new Date(2020, 10, 5, 10);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
    float: "right",
  };

  if (hours < 12) {
    timeOfDay = "Good Morning";
    styles.color = "#04756F";
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "Good Afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "Good night";
    styles.color = "#D90000";
  }

  return (
    <div>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Sebastian Vizcaino</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/About">
                  About
                </Link>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
            <h1 style={styles}>{timeOfDay}</h1>

          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Footer />

        </Container>
      </Router>
    </div>
  );
}

export default App;
