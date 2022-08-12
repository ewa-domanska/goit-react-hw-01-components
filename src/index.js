import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import './index.css';
import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friendsData from "./components/friendList/friendsData.json";
import transactions from "./components/transactions/transactions.json";
import {Profile} from "./components/profile/profile";
import {Statistics} from "./components/statistics/statistics";
import {FriendList} from "./components/friendList/friends";
import {Transactions} from "./components/transactions/transactionsHistory";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Profile user={user}/>
    <Statistics title="upload stats" stats={data}/>
    <Statistics stats={data}/>
    <FriendList friends={friendsData}/>
    <Transactions items={transactions}/>
  </React.StrictMode>
);
