
import React from 'react'
import Routes from './src/routes/routes'
import firebase from 'firebase'
import moment from 'moment'

moment.locale('pt', {
  months : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
  monthsParseExact : true,
  weekdays : 'Dom_Seg_Ter_Qua_Qui_Sex_Sab'.split('_'),
})

var firebaseConfig = {
  apiKey: "AIzaSyBkuAL95-obOLdWFp-VsJyRFF7OB87dKBU",
  authDomain: "todolist-cea9f.firebaseapp.com",
  databaseURL: "https://todolist-cea9f.firebaseio.com",
  projectId: "todolist-cea9f",
  storageBucket: "todolist-cea9f.appspot.com",
  messagingSenderId: "251975271736",
  appId: "1:251975271736:web:23e3fd9fa88a1fa55fedcd",
  measurementId: "G-RRY92VBMPF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
      <Routes />
  );
};
