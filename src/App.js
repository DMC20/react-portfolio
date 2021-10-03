import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fontsource/roboto';
import Nav from "./components/Navigation";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Projects";
import Resume from "./components/Resume";


function App() {

  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Portfolio} />
          <Route exact path="/Contact" component={ContactForm} />
          <Route exact path='/Resume' component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
