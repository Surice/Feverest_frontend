import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Home from '@/views/main/home/home.component.vue'
import Impressum from '@/views/main/impressum/impressum.component.vue'

import FreeGames from '@/views/projects/freeGames/freeGames.component.vue'
import McCGuide from '@/views/projects/mcCGuide/mcCGuide.component.vue'
import FuelCalculator from '@/views/projects/fuelCalculator/fuelCalculator.component.vue'

import DevHome from '@/views/portal-dev/home/home.component.vue'
import DevLogin from '@/views/portal-dev/login/login.component.vue'

import Subscribe from '@/views/newsletter/subscribe/subscribe.component.vue'
import Unsubscribe from '@/views/newsletter/unsubscribe/unsubscribe.component.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Home,
    meta: {
      title: "for gamer",
      description: "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!"
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "for gamer",
      description: "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!"
    }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
    meta: {
      title: "for gamer"
    }
  },
  {
    path: '/project/free_Games',
    name: 'Free-Games',
    component: FreeGames,
    meta: {
      title: "Free Games API",
      description: "This site offers a free api for temporary free games from steam and epic games"
    }
  },
  {
    path: '/project/mc_c_guide',
    name: 'MC-Crafting-Guide',
    component: McCGuide,
    meta: {
      title: "MC Crafting Guide"
    }
  },
  {
    path: '/project/fuel_calculator',
    name: 'fuel_calculator',
    component: FuelCalculator,
    meta: {
      title: "ACC Fuel Calculator E-Sports",
      description: "A calculator for several race simulations to calculate for example the fuel needed for a race. Most used for E-Sports"
    }
  },

  {
    path: '/dev-portal/home',
    name: 'Dev-Home',
    component: DevHome,
    beforeEnter: async (to, from, next) => {
      try{
        let check = await axios.get('https://feverest.de/api/user/checkToken');
        
        if(check.status != 200 || check.data.role != "dev"){
          next('/dev-portal/login');
        }

        next();
      }catch(err){
        //next();
        next('/dev-portal/login');
      }
    }
  },
  {
    path: '/dev-portal/login',
    name: 'Dev-Login',
    component: DevLogin
  },


  {
    path: '/newsletter/subscribe',
    name: 'Newsletter-subscribe',
    component: Subscribe,
    meta: {
      title: "Free Games Newsletter"
    }
  },
  {
    path: '/newsletter/unsubscribe',
    name: 'Newsletter-unsubscribe',
    component: Unsubscribe,
    meta: {
      title: "Free Games Newsletter"
    }
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `Feverest - ${to.meta.title || 'for gamer'}`;
  let meta = document.createElement('meta');
  document.getElementsByTagName('meta')["description"].content = to.meta.description || "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!";
  next();
});

export default router
