/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from "vue-router";
import Vuex from 'vuex';
import MainApp from "./components/MainApp";
import Navigation from "./components/Navigation";
import LoginComponent from "./components/LoginComponent";
import {routes} from "./routes";
import storeData from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
    routes,
    mode :'history',
})
const store = new Vuex.Store(storeData)
const app = new Vue({
    el: '#app',
    router,
    store,
    components :{
        'main-app' : MainApp,
        'navigation' : Navigation,
        'login-component' : LoginComponent,
    }
});
