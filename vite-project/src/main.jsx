// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importing Provider from react-redux to provide the Redux store to the entire app
import store from './store/store.js'; // Importing the Redux store
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the main CSS file for styling

// Rendering the main application
// Using ReactDOM.createRoot() method for concurrent mode rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the entire app inside Provider component to provide access to the Redux store
  <Provider store={store}>
    {/* Enabling React Strict Mode for additional checks and warnings */}
    <React.StrictMode>
      {/* Rendering the main App component */}
      <App />
    </React.StrictMode>
  </Provider>

)
