import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
    </Switch>
  );
}
export default Routes;
