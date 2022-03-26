<template>
  <div class="navbar-me">
    <router-link to="/home" class="nav-logo">
      <h1 class="nav-txt">Feverest</h1>
    </router-link>

    <div class="navbar-div">
      <div>
        <router-link to="/home" class="navbar-link">Home</router-link>
      </div>
      <div>
        <router-link to="/project/free_Games" class="navbar-link">Free Games</router-link>
      </div>
      <div>
        <router-link to="/project/fuel_calculator" class="navbar-link">Fuel Calculator</router-link>
      </div>
      <div>
        <router-link to="/project/mc_c_guide" class="navbar-link">MC Crafting Guide</router-link>
      </div>
    </div>

    <div class="navbar-dropdown">
      <button v-on:click="dropdown" class="navbar-link navbar-menu">
        Menu <i class="fas fa-chevron-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/home">Home</router-link>
        <router-link to="/project/free_Games">Free Games</router-link>
        <router-link to="/project/fuel_calculator">Fuel Calculator</router-link>
        <router-link to="/project/mc_c_guide">MC Crafting Guide</router-link>
      </div>
    </div>
  </div>
</template>

<script src="./header.component.js"></script>
<style scoped src="./header.component.css"></style>