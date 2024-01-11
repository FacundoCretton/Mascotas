import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './components/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <React.StrictMode>
      <GlobalStyles />
        <App />
      </React.StrictMode>
      </PersistGate>
    </Provider>
  </>
);

