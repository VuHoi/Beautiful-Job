import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainContainer />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
