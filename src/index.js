import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import {Profile} from "./components/profile/profile";
import {Statistics} from "./components/statistics/statistics";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile user={user}/>
    <Statistics data={data}/>
  </React.StrictMode>
);
