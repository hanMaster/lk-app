import { observable } from 'mobx';

class OrdersState {
  @observable ordersList;
  constructor() {
    this.ordersList = [
      { id: 1, title: 'first order', amount: 350000 },
      { id: 2, title: 'second order', amount: 450000 },
      { id: 3, title: 'third order', amount: 550000 },
    ];
  }
}

export default new OrdersState();
