<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage">
    <global-header> </global-header>

    <div class="body">
      <social-bar />
      <div class="blog-sec">

        <div id="blog1">
          <img
            :src="require(`../../asset/image/fragcolor_background.png`)"
            class="img_holder"
            alt="blog"
            id="blogpage-img1"
          />

          <div class="text_holder">
            <p class="date">12 August</p>
            <p class="author"> By @voidtarget and @aljaparis. </p>
            <h2>Fragcolor: Building the Decentralized Gaming Engine for the Open Metaverse</h2>
            <p class="blog-description">Massively Multiplayer Online games (MMO) have allowed 
              users worldwide to connect deeper by developing shared emotional experiences. 
              The effect this interconnectedness has on the formation of micro-communities 
              is unprecedented.</p>
          </div>
        </div>

         <div id="blog2">
           <img
            :src="require(`../../asset/image/fragcolor_blog2.png`)"
            class="img_holder"
            alt="blog"
          />

          <div class="text_holder">
            <p class="date">28 September</p>
            <h2>Create to Earn Economy and the Bottom-up Fragment Model</h2>
            <p class="author"> By @voidtarget and @aljaparis. </p>
          </div>
        </div>

          <div id="blog3">
           <img
            :src="require(`../../asset/figmaElements/medium_blog3.jpg`)"
            class="img_holder"
            alt="blog"
          />

          <div class="text_holder">
            <p class="date">30 Oct</p>
            <h2>Why Gaming Feels Good.</h2>
            <p class="author"> By @BernBitt </p>
          </div>
        </div>


      </div>

      <description-bottom></description-bottom> 
    </div>
  </div>
</template>
