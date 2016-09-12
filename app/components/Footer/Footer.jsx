import React from 'react';

export default class Footer extends React.Component {
  render() {
    let year = new Date().getFullYear();
    
    return (
      <footer>
        <hr />
        All rights reserved to Company Inc. &copy; {year}
      </footer>
    );
  }
}