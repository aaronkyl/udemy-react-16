import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Courses from '../Courses/Courses';
import Users from '../Users/Users';


const project = (props) => (
  <div>
    <nav>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </nav>
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/courses" component={Courses} />
      <Redirect from="/all-courses" to="/courses" />
      <Route render={() => <h1>404 ERROR</h1>} />
    </Switch>
  </div>
)

export default project