import React from 'react';
import { Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Employment from './components/Employment';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/employment' component={Employment} />
          <Route path='/projects' component={Projects} />
          <Route path='/cv' component={CV} />
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
