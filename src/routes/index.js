import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import NewMeetup from '~/pages/NewMeetup';
import Meetup from '~/pages/Meetup';
import Profile from '~/pages/Profile';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={NewMeetup} />
      <Route path="/meetup" exact component={Meetup} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
