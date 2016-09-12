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
      items: this.homeStore.getAll()
    };
  }

  _onChange() {
    this.setState({
      items: this.homeStore.getAll()
    })
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
          <p><a className="btn btn-primary" href="#" role="button" onClick={ this.addNewItem }>Generate Random Number</a></p>
        </div>
        <hr />
        <h4>Stupid list of numbers</h4>
        <p>Once you click the add button above you should start seeing randomly generated numbers below. Only used to display the FLUX arch. Probably best if it is placed in separate component.</p>
        <ul className="list-of-numbers">
          {
            this.state.items.map((item, index) => {
              return (
                <li key={ index }>
                  { item }
                  <button type="button" className="btn btn-xs btn-danger btn--remove" onClick={ () => this.removeItem(index) }>&times;</button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}