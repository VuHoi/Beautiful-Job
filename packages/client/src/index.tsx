import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MainContainer />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
