import './App.css';
import React, {Component} from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact to="/" component={Home}/>
          <Route to="/about" component={About}/>
          <Route to="/projects" component={Projects} />
          <Route to="/contact" component={Contact} />
        </Switch>
    );
  }
}

export default App;
