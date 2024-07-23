import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import counterStore from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider is for redux store to be available  for  every childer to use */}
    <Provider store={counterStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
