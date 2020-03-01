import { observable, action } from 'mobx';

class DrawerState {
  @observable isOpen;
  @observable page;
  constructor() {
    this.isOpen = false;
    this.page = 'activeList';
  }
  @action('toggle left panel')
  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
  @action('Page selection')
  selectPage(page) {
    this.page = page;
  }
}

export default new DrawerState();
