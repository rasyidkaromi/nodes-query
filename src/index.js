
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/statecontext'

global.stateOption = []

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals();
