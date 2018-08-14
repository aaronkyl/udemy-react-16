import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    return (
      <React.Fragment>
        <div className={classes.SideDrawer}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
        <Backdrop show />
      </React.Fragment>
    )
}

export default sideDrawer