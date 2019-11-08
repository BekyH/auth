import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import home from './components/Home';
import about from './components/about';
import contact from './components/contact';
import login from './components/login';
import register from './components/register';
Vue.use(vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.component('home',home);
Vue.component('about',about);
Vue.component('contact',contact);
Vue.component('login',login);
Vue.component('register',register);
const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
      }
  }
);
let router = new VueRouter({
  routes:[
    {path:'',
    redirect:'login'
  },
  {
    path:'/home',
    name:'home',
    component:home,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        
          next('/login');
          
      } else {
          next();
      }
  }
  },
  {
    path:'/about',
    name:'about',
    component:about,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        
          next(false);
          
      } else {
          next();
      }
  }
  },
  {
    path:'/contact',
    name:'contact',
    component:contact,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        
          next(false);
          
      } else {
          next();
      }
  }
  },
  {
    path:'/login',
    name:'login',
    component:login,
    
  
  },
  {
    path:'/register',
    name:'register',
    component:register
  }

  ],
  mode:'history'
})


new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
