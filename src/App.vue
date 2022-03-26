<template>
  <div id="app">
    <router-view/>
    <cookie-banner/>
  </div>
</template>
<script>
  import cookieBanner from '@/components/cookieBanner.vue';

  import axios from 'axios';

  export default {
    name: "Feverest",
    data: function(){
      return{
        reqUrl: "/api/analytics/newVisit",
        userData: navigator
      }
    },
    components: {
      cookieBanner
    },
    mounted() {
      axios.get(this.reqUrl);
    },
    
  }
</script>
<style>
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

  *{
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  body{
    background-color: rgb(50, 50, 50) !important;
    /* background-color: rgb(18, 38, 75) !important; */
  }
  .headline{
    text-align: center;
    color: white;
    text-shadow: 3px 3px 4px rgb(36, 111, 182);
  }
</style>
