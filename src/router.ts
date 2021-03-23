import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Dapp from './views/Dapp.vue';
import Dashboard from './views/Dashboard.vue';
import Stake from './views/Stake.vue';
import Bond from './views/Bond.vue';
import Migrate from './views/Swap.vue';
import LPStaking from './views/LPStaking.vue';
//import Presale from './views/Presale.vue';
//import Presale3 from './views/Presale3.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/stake', name: 'stake', component: Stake },
  { path: '/bond', name: 'bond', component: Bond },
  { path: '/lpstake', name: 'lpstake', component: LPStaking },
  //{ path: '/presale', name: 'presale', component: Presale },
 /// { path: '/presale3', name: 'presale3', component: Presale3 },
  { path: '/migrate', name: 'migrate', component: Migrate },
  { path: '/app', name: 'dapp', component: Dapp }
];

const router = new VueRouter({
  routes
});

export default router;
