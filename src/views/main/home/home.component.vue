<template>
  <div class="home">
    <div class="content">
      <navbar></navbar>
      <div style="width: 100%"> 
        <img src="@/assets/tastatur.jpg" class="banner-img" />
      </div>
      
      <div class="content-home">
        <img src="@/assets/coding.jpg" class="main-img">
        <div class="banner">
          <div class="banner-welcome">
            <p>Welcome!</p>
          </div>
          <div class="banner-phrases">
            <p ref="typedText"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-projects">
      <div class="projects-hub">
        <div class="project">
          <img src="@/assets/free-games_icon.png" class="small-box" />
          <router-link to="/project/free_Games" class="big-box" tag="button">
            <h4>Free Games</h4>
            <p>
              an API who displays all the currently free games from different
              games suppliers
            </p>
          </router-link>
        </div>
        <div class="project">
          <img src="@/assets/acc-assistant-logo.jpg" class="small-box" />
          <router-link to="/project/fuel_calculator" class="big-box" tag="button">
            <h4>Fuel Calculator</h4>
            <p>
              an assistant to calculate the required Fuel for a Race and the
              required boxstops
            </p>
          </router-link>
        </div>
        <div class="project">
          <img src="@/assets/mc_screen_crafting.png" class="small-box" />
          <router-link to="/project/mc_c_guide" class="big-box" tag="button">
            <h4>Mincraft Crafting Assistant</h4>
            <p>
              a Calculator for multiple Craftingrecipes in Minecraft modpacks and
              Vanilla
            </p>
          </router-link>
        </div>
      </div>
      <foot></foot>
    </div>
  </div>
</template>

<script src="./home.component.js"></script>
<style scoped src="./home.component.css"></style>