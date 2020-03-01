import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import { observer } from 'mobx-react';
import drawerStore from '../store/drawer';

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
        <ListItem
          button
          key="Active orders"
          onClick={() => drawerStore.selectPage('activeList')}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Active orders" />
        </ListItem>
        <ListItem
          button
          key="Archived orders"
          onClick={() => drawerStore.selectPage('archiveList')}
        >
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archived orders" />
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
