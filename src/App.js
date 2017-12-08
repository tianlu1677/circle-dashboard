import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/store/createStore';
import RootRoutes from './app/routes/Root';

class App extends Component {
  
  render() {
    
    const dashboardStore = configureStore()
    return(
      <Provider store={dashboardStore}>
         <RootRoutes />
      </Provider>
    );
  }
}

export default App;
