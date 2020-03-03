import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
// import drawerStore from './store/drawer';
import AppHeader from './components/header';
import TemporaryDrawer from './components/drawer';
import Home from './pages/home';
import ActiveList from './pages/activeList';
import ArchiveList from './pages/archiveList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TemporaryDrawer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/active" exact component={ActiveList} />
        <Route path="/archive" exact component={ArchiveList} />
        {/* <Route path='/order/:id' component={Order}/> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default observer(App);
