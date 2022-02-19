<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage">
    <global-header> </global-header>

    <div class="body">
      <social-bar />
      <img
        class="star-bg-image"
        :src="require(`../../asset/figmaElements/star_background.png`)"
        alt="Fragcolor Star Background"
      />
      <img
        class="grid-bg-image"
        :src="require(`../../asset/figmaElements/background-grid.png`)"
        alt="Fragcolor Grid Background"
      />

      <div class="press-list-sec" style="color:white; margin-top: 200px; margin-left: 100px;">
        <h2> list of press articles </h2>
        <!-- <router-view></router-view> -->
         <router-link to="/press/Fragments-Foundation-Raises-to-Expand-Fragcolor">article1</router-link>
         <router-link to="/Fragments-Foundation-Raises-to-Expand-Fragcolor">still article1</router-link>

      </div>

      <description-bottom ref="" />
    </div>
  </div>
</template>
