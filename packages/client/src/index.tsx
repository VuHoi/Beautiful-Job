import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo';
import { ApolloProvider } from 'react-apollo';
import { StoreProvider } from 'easy-peasy';
import { store } from './stores/common';


ReactDOM.render(
  <StoreProvider store={store}>
    <ApolloProvider client={client}>
      <MainContainer />
    </ApolloProvider>
  </StoreProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
