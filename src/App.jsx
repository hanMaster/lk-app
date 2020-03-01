import React from 'react';
import { observer } from 'mobx-react';
import drawerStore from './store/drawer';
import AppHeader from './components/header';
import TemporaryDrawer from './components/drawer';
import ActiveList from './components/activeList';
import ArchiveList from './components/archiveList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TemporaryDrawer />
      {drawerStore.page === 'activeList' && <ActiveList />}
      {drawerStore.page === 'archiveList' && <ArchiveList />}
    </div>
  );
}

export default observer(App);
