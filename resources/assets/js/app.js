/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

var firebase = require('firebase/app');
require('firebase/database')

var config = {
  apiKey: "AIzaSyBSE_tja7h7QwtIEndLgQx_FLYyI0WUudA",
  authDomain: "hemocentrosdemo.firebaseapp.com",
  databaseURL: "https://hemocentrosdemo.firebaseio.com",
  projectId: "hemocentrosdemo",
  storageBucket: "hemocentrosdemo.appspot.com",
  messagingSenderId: "784587202764"
};

firebase.initializeApp(config);

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

import Example from './components/Example.vue'
import HemoCard from './components/HemoCard.vue'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        hemocenters: null
    },
    created: function() {
        console.log("vue root instance created")
        var hemocenters = this.loadHemocenters()
    },
    components: {
        Example,
        HemoCard
    },
    methods: {
        loadHemocenters: function() {
            var database = firebase.database().ref('HemocentrosBR/Hemocenters');
            var hemocenters = new Array();
            database.once('value').then(function(snapshot) {
                snapshot.forEach(function(elem) {
                    hemocenters.push(elem.val());
                })
            })
            this.hemocenters = hemocenters
        },
    }
});