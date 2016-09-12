import Dispatcher from '../dispatcher.jsx';
import { EventEmitter } from 'events';

export default class HomeStore extends EventEmitter {
  constructor() {
    super();

    this.list = [];

    Dispatcher.register((payload) => {
      switch (payload.action) {
        case 'ADD_ITEM': 
          if (payload.data !== '') {
            this.addItem(payload.data);
            this.emitChange();
          }
          break;
        case 'REMOVE_ITEM': 
          if (payload.data !== '') {
            this.removeItem(payload.data);
            this.emitChange();
          }
          break;
      }
    });
  }

  emitChange() {
    this.emit('change');
  }

  getAll() {
    return this.list;
  }

  addListener(cb) {
    this.on('change', cb);
  }

  removeListener(cb) {
    this.removeListener('change', cb);
  }

  addItem(item) {
    this.list.push(item);
  }

  removeItem(index) {
    this.list.splice(index, 1);
  }
}