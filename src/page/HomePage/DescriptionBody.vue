<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBody.ts" module lang="ts"></script>

<template>
  <!-- ===================================== landing page ===================================== -->
  <div class="homePageMainPage" @click="hidePopupWhenClick">
    <img style="display: none" :src="require(`../../asset/figmaElements/favicon.png`)" />

    <img
      class="triangle-bg-image"
      :src="require(`../../asset/figmaElements/bg_image.png`)"
    />

    <div class="landing-page-sec">
      <div>
        <div class="description">
          <div class="intro-text">
            <h1>
              Building a game engine <br /> 
              and experiences on Fragnova’s <br />
              decentralised network
            </h1>
          </div>

          <div id="about-sec"></div><br /><br/><br/>
          <div class="description-text">
            <h1>About</h1>
            <h3>
              At Fragcolor, our mission is to utilize distributed technologies to provide
              <br />
              tools for game creators to allow the creation of interoperable games.
            </h3>
            <br />

            <h3 class="description-subtext">
              We are also the studio behind Ambal Duels and Rhythm Run
            </h3>
          </div>

          <div class="projects-img-holder">
            <img
              class="projects-img-ambal"
              :src="require(`../../asset/figmaElements/ambal_square_img.png`)"
              v-on:click="showAmbalPopupWindow"
            />
            <img
              class="projects-img-rhythm"
              :src="require(`../../asset/figmaElements/rhythm_run_square_img.png`)"
              v-on:click="showRhythmPopupWindow"
            />
          </div>

          <div class="projects-popup-window projects-ambal" v-if="allowAmbalPopup">
            <div class="close" v-on:click="closeAmbalPopupWindow">
              <close />
            </div>
            <h3>Ambal Duels</h3>
            <p>Duel in a high fantasy land, mastering player's skills in strategic battles with 
              simultaneous game play. Collect decks and characters to create powerful builds 
              in this RPG inspired card game.
            </p>
            <a href="https://medium.com/@fragcolor/introducing-ambal-duels-the-tournament-goes-digital-45ee4f4b8f4f" target="_blank" style="text-decoration: none;">
              <div class="project-read-more-btn">Read more</div>
            </a>
          </div>


          <div class="projects-popup-window projects-rhythm"  v-if="allowRhythmPopup">
            <div class="close" v-on:click="closeRhythmPopupWindow">
              <close />
            </div>            
            <h3>Rhythm Run</h3>
            <p>Rhythm Run is a 2d side scrolling multiplayer run and gun game where players survive and attack by
               using rhythm. By understanding patterns within a game players are able to increase their damage, 
               thus advancing their ranking. 
            </p>
            <a href="https://medium.com/@fragcolor/introducing-rhythm-run-124240ec4988" target="_blank" style="text-decoration: none;">
              <div class="project-read-more-btn">Read more</div>
            </a>
          </div>


        </div>
      </div>

      <technologySec id="technology-sec" />

      <div id="team-sec"></div> <br /><br/><br />
      <teamSec class="team-sec-holder" />


      <!-- ===================================== news sec ===================================== -->
      <div id="blog-sec"></div>
      <div class="homepage-news-sec">
        <h2>Blog</h2>
        <div class="homepage-news-sec-blog1">
          <a href="https://medium.com/@fragcolor/introducing-ambal-duels-the-tournament-goes-digital-45ee4f4b8f4f" target="_blank">
            <img
              :src="require(`../../asset/figmaElements/AmbalDuelsLogo.png`)"
              class="img_holder"
              alt="blog"
              id="landing-blog-img1"
            />
          </a>

          <h3>
            Introducing Ambal Duels: The Tournament Goes Digital
          </h3>
          <p>
            Following the success of Ambal Tournament strategy card game, a physical game
            funded on Kickstarter earlier this year and praised for its innovative
            gameplay and unique art style, Fragcolor is now bringing the Ambal experience
            to the digital realm under Ambal Duels.
          </p>
        </div>

        <div class="homepage-news-sec-blog2">
          <a href="https://medium.com/@fragcolor/user-generated-content-mods-and-game-creation-systems-557d2b94b452" target="_blank">
            <img
              :src="require(`../../asset/figmaElements/medium_blog4.jpeg`)"
              class="img_holder"
              alt="blog"
              id="landing-blog-img2"
            />
          </a>
          <h3>User-generated Content: Mods and Game Creation Systems</h3>
          <p>
            Modding is the process of altering a game. Players of the game usually do
            this, and it can range from small changes to complete overhauls. This
            phenomenon has been around for decades, with fans wanting to improve the game
            or as a form of self-expression.
          </p>
        </div>
      </div>
      
      <a href="https://medium.com/@fragcolor" target="_blank" style="text-decoration: none;">
          <div class="blog-read-more-btn">Read more</div>
        </a>

        <a href="#">
            <img
              :src="require(`../../asset/figmaElements/scroll_to_top.png`)"
              class="scroll-to-top"
          />
        </a>
    </div>
  </div>
</template>
