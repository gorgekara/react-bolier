import Dispatcher from '../dispatcher.jsx';
import { EventEmitter } from 'events';

export default class HomeStore extends EventEmitter {
  constructor() {
    super();

    // Populate initial list with AJAX
    this.list = [
      7777,
      6666
    ];

    Dispatcher.register((payload) => {
      switch (payload.action) {
        case 'ADD_ITEM': 
          if (payload.data !== '') {
            this.addItem(payload.data);
            this.emitChange(payload.action);
          }
          break;
        case 'REMOVE_ITEM': 
          if (payload.data !== '') {
            this.removeItem(payload.data);
            this.emitChange(payload.action);
          }
          break;
      }
    });
  }

  emitChange(action) {
    this.emit('change');
  }

  getAll() {
    return this.list;
  }

  addEventListener(cb) {
    this.on('change', cb);
  }

  removeEventListener(cb) {
    this.removeListener('change', cb);
  }

  addItem(item) {
    this.list.push(item);
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }
}