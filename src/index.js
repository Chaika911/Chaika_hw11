import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { MyContext } from './components/MyContext/MyContext';



// const value = {
//   color: 'white'
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
  </React.StrictMode>
);

