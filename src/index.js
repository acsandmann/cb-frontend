import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-extend-native
Date.prototype.getWeek = function(){
  let day_miliseconds = 86400000,
      onejan = new Date(this.getFullYear(),0,1,0,0,0),
      onejan_day = (onejan.getDay()===0) ? 7 : onejan.getDay(),
      days_for_next_monday = (8-onejan_day),
      onejan_next_monday_time = onejan.getTime() + (days_for_next_monday * day_miliseconds),
      first_monday_year_time = (onejan_day>1) ? onejan_next_monday_time : onejan.getTime(),
      this_date = new Date(this.getFullYear(), this.getMonth(),this.getDate(),0,0,0),// This at 00:00:00
      this_time = this_date.getTime(),
      days_from_first_monday = Math.round(((this_time - first_monday_year_time) / day_miliseconds));

  //const first_monday_year = new Date(first_monday_year_time);

  return (days_from_first_monday>=0 && days_from_first_monday<364) ? Math.ceil((days_from_first_monday+1)/7) : 52;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
