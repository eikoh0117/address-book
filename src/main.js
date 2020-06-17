import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDjbgQ0h0xzaO8ilFotTYr_HLrpy3Cjgec",
  authDomain: "my-address-pj-85820.firebaseapp.com",
  databaseURL: "https://my-address-pj-85820.firebaseio.com",
  projectId: "my-address-pj-85820",
  storageBucket: "my-address-pj-85820.appspot.com",
  messagingSenderId: "402180161222",
  appId: "1:402180161222:web:8d9a36164e04e6cdff21c7",
  measurementId: "G-X7SXZVPNB2",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
