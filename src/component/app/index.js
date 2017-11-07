import React from 'react';
import './_app.scss';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {BrowserRouter, Route, Redirect, IndexRoute} from 'react-router-dom';
import Homepage from '../homepage'
import Room from '../room';

class App extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className="application">
          <div>
            <Navbar />
            <div classname='container'>
              {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  children: state.children,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);