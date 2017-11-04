import React from 'react';
import './_app.scss';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Homepage from '../homepage'
import Room from '../room';

class App extends React.Component {


  componentDidMount() {
    let token = utils.cookieFetch('X-Sluggram-Token');
    if(token) this.props.tokenSet(token);
  }

  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar />
            <Homepage />
            <Room />
            {/* <Route path="/welcome/:auth" component={LandingContainer}/>
            <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/home" />}/>
            <Route exact path="/home" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/home" />}/>
            <Route exact path="/gallery" component={() => this.props.auth ? <GalleryContainer/> : <Redirect to="/home" />}/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);