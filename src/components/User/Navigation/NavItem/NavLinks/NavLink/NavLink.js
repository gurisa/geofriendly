import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import classes from './NavLink.css';
import Div from '../../../../../../hoc/Div/Div';

class NavLinkClass extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    let navLink = (
      <NavLink
        to={this.props.path}
        exact
        className={classes.link}
        activeClassName={classes.linkActive}
        onClick={this.props.clicked}
      >
        <Button color="inherit" className={classes.menuButton}>
          {this.props.name}
        </Button>
      </NavLink>
    );

    let clicked = this.handleClose;

    if (this.props.clicked) {
      clicked = this.props.clicked;
    }
  
    if (this.props.submenu) {
      const subLink = this.props.submenu.map(data => (
        <MenuItem 
          onClick={clicked}
          key={data.name}
          style={{padding: '0', display: 'block', height: 'auto', width: '200px'}} >
          <NavLink
            to={data.path}
            exact
            className={classes.subLink}
            activeClassName={classes.linkActive}
          >
            <Button color="inherit" className={classes.menuButton}>
              {data.name}
            </Button>
          </NavLink>
        </MenuItem>
      ));
  
      navLink = (
        <Div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.state.open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            color="inherit" 
            className={classes.buttonMenu}
            onClick={this.handleToggle}
          >
            {this.props.name}
          </Button>
          <Popper 
            open={this.state.open} 
            anchorEl={this.anchorEl} 
            transition disablePortal
            style={{zIndex: '9999999', position: 'fixed'}}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {subLink}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Div>
      );
    }
  
    return (
      <Div>{navLink}</Div>
    );
  }
};

export default NavLinkClass;