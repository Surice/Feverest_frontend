<template>
  <div class="freeGames">
    <navbar></navbar>
    <br>
    <h1 class="headline">Free Games</h1>

    <div class="small-card">
    <code id="lastScan" class="lastScan">Last Scan: {{ date }}</code>
    <br><br>
    <router-link to="/newsletter/subscribe" tag="button"
        >Signup to the newsletter</router-link>
    </div>

    <div class="content">
      <table class="table-me" id="table-me">
        <tr class="table-head">
          <th class="tableE"><strong>Name</strong></th>
          <th class="tableE"><strong>Plattform</strong></th>
          <th class="tableE"><strong>Link</strong></th>
        </tr>
        <tr v-for="content in contents" :key="content.name">
          <th class="tableE">{{ content.name }}</th>
          <th class="tableE"><img :src="require(`../../../assets/${content.plattform}_icon.png`)"></th>
          <th class="tableE">
            <a target="_blank" class="link" :href="content.url">{{ content.url }}</a>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script src="./freeGames.component.js"></script>
<style scoped src="./freeGames.component.css"></style>