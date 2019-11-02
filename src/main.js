import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import home from './components/Home';
import about from './components/about';
import contact from './components/contact';
import login from './components/login';
import register from './components/register';
Vue.use(vuetify);
Vue.use(VueRouter);
Vue.component('home',home);
Vue.component('about',about);
Vue.component('contact',contact);
Vue.component('login',login);
Vue.component('register',register);

let router = new VueRouter({
  routes:[
    {path:'',
    redirect:'home'
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/about',
    name:'about',
    component:about
  },
  {
    path:'/contact',
    name:'contact',
    component:contact
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register
  }

  ]
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
