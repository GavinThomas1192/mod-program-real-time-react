import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import appCreateStore from './lib/app-create-store';
import Routes from './routes';
import * as utils from './lib/utils';
import {persistStore} from 'redux-persist';


let store = appCreateStore();
persistStore(store);

class AppContainer extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router routes={Routes} history={browserHistory} />
      </Provider>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));

