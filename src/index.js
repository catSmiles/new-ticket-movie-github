import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

//Cấu hình realtime (websocket với signalR)
import * as signalR from '@aspnet/signalr';

// ant.design
import 'antd/dist/antd.css';

//reactslick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Includes: tailwindcss + ......
import './index.css';

import { DOMAIN } from './util/settings/config';

//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch((errors) => {
    console.log(errors);
  });

// react@17
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// react@17 - current
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// react@18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
