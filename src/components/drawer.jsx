import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArchiveIcon from '@material-ui/icons/Archive';
import HomeIcon from '@material-ui/icons/Home';
import { observer } from 'mobx-react';
import drawerStore from '../store/drawer';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const TemporaryDrawer = () => {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => drawerStore.toggleDrawer()}
    >
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink exact to="/">
            Home
          </NavLink>
        </ListItem>
        <ListItem button key="Active orders">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <NavLink to="/active">Active orders</NavLink>
        </ListItem>
        <ListItem button key="new order">
          <ListItemIcon>
            <NoteAddIcon />
          </ListItemIcon>
          <NavLink to="/create-new-order">Create new order</NavLink>
        </ListItem>
        <ListItem button key="Archived orders">
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <NavLink to="/archive">Archived orders</NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        open={drawerStore.isOpen}
        onClose={() => drawerStore.toggleDrawer()}
      >
        {sideList()}
      </Drawer>
    </div>
  );
};

export default observer(TemporaryDrawer);
