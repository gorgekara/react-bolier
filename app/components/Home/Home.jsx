import React from 'react';

import HomeActions from '../../actions/HomeActions.jsx';
import HomeStore from '../../stores/HomeStore.jsx';

import './Home.scss';

let actions = new HomeActions();

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.homeStore = new HomeStore();
    this.state = {
      list: []
    };
  }

  _onChange() {
    console.log('change triggered');
    this.setState({
      list: this.homeStore.getAll()
    });
  }

  componentDidMount() {
    this.homeStore.addListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.homeStore.removeListener(this._onChange.bind(this));
  }

  addNewItem() {
    let item = Math.ceil(Math.random() * 1000);
    actions.addItem(item);
  }

  removeItem(index) {
    actions.removeItem(index);
  }

  render() {
    return (
      <div id="home">
        <div className="jumbotron">
          <h1>Hello Home</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p><a className="btn btn-primary" href="#" role="button" onClick={ this.addNewItem() }>Learn more</a></p>
        </div>
        <hr />
        {
          this.state.list.map((item, index) => {
            return (
              <li key={ index }>{ item } <a href="" onClick={ this.removeItem(index) }>&times;</a></li>
            );
          })
        }
      </div>
    );
  }
}