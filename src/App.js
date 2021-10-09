import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navigation";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {

  return (
    <Router>
      <Nav></Nav>
      <div>
          <Route exact path="/" component={About} />
          <Route exact path="/Projects" component={Portfolio} />
          <Route exact path="/Contact" component={ContactForm} />
          <Route exact path='/Resume' component={Resume} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
