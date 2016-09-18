import Dispatcher from '../dispatcher.jsx';

export default class HomeActions {
  constructor() {
    this.dispatcher = Dispatcher;
  }

  addItem(item) {
    this.dispatcher.dispatch({
      action: 'ADD_ITEM',
      data: item,
    });
  }

  removeItem(index) {
    this.dispatcher.dispatch({
      action: 'REMOVE_ITEM',
      data: index,
    });
  }
}
