import React from 'react';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';

import classes from './Sidebar.css';
import Logo from '../../Logo/Logo';
import Search from '../NavItem/Search/Search';
import NavLinks from '../NavItem/NavLinks/NavLinks';

const sidebar = props => {
  const { link, show } = props;

  let sidebarClasses = [classes.sidebar, classes.close];

  if (show) {
    sidebarClasses = [classes.sidebar, classes.open];
  }

  return (
    <div className={sidebarClasses.join(' ')}>
      <div className={classes.sidebarLogo}>
        <Typography 
          variant="display1" 
          className={classes.closeIcon} 
          onClick={props.clicked}
        >
          <Close />
        </Typography>
        <Logo />
      </div>
      <Search />
      <div className={classes.sidebarLink}>
        <NavLinks link={link} clicked={props.clicked} />
      </div>
    </div>
  );
};

export default sidebar;
