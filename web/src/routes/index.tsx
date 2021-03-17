import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Registrar from '../pages/Registrar';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/registrar" exact component={Registrar} />
  </Switch>
)

export default Routes;