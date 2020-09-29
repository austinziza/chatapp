import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'       


     

// Required for side-effects
require("firebase/firestore");






const firebaseConfig = {
  apiKey: "AIzaSyAP5q8bXHVJ3Q-i7VF3loiRVhMflW1xbJE",
  authDomain: "fir-vuechat-e7846.firebaseapp.com",
  databaseURL: "https://fir-vuechat-e7846.firebaseio.com",
  projectId: "fir-vuechat-e7846",
  storageBucket: "fir-vuechat-e7846.appspot.com",
  messagingSenderId: "830515500547",
  appId: "1:830515500547:web:5b7f42b3d740ac4d85e036"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();
window.db = db;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
