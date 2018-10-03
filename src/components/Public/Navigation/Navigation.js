import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import classes from './Navigation.css';
import Logo from '../Logo/Logo';
import NavItem from './NavItem/NavItem';
import DrawerToggle from './Sidebar/DrawerToggle/DrawerToggle';

const navigation = props => {
    const { link, clicked } = props;

    return (
      <AppBar position="sticky" color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <NavItem link={link} />
          <DrawerToggle clicked={clicked} />
        </Toolbar>
      </AppBar>
    );
}

export default navigation;
