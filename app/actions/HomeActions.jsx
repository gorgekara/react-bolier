import Dispatcher from '../dispatcher.jsx';

export default class HomeActions {
  addItem(item) {
    Dispatcher.dispatch({
      action: 'ADD_ITEM',
      data: item
    });
  }

  removeItem(index) {
    Dispatcher.dispatch({
      action: 'REMOVE_ITEM',
      data: index
    });
  }
}