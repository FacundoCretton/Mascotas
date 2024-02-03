import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './components/redux/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

