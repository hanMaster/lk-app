import { observable, action } from 'mobx';

class DrawerState {
  @observable isOpen;

  constructor() {
    this.isOpen = false;
  }

  @action('toggle left panel')
  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
}

export default new DrawerState();
