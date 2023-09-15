import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/contact" component={ Contact } />
    </Switch>
  );
}
export default Routes;
