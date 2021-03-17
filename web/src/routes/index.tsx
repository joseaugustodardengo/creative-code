import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/registrar" component={Registrar} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes;