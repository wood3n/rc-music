import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hello } from './components/Button';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
