<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBody.ts" module lang="ts"></script>

<template>
  <!-- ===================================== landing page ===================================== -->
  <div class="homePageMainPage">
    <!-- <img
      class="star-bg-image"
      :src="require(`../../asset/figmaElements/star_background.png`)"
      alt="Fragcolor Star Background"
    /> -->

    <img style="display: none" :src="require(`../../asset/figmaElements/favicon.png`)" />

    <!-- <landingPageGrid class="landingGrid" /> -->
    <!-- <landingPageGridMobile class="landingGridMobile" /> -->
    <!-- class="landingGridMobile" -->
    <img
      class="triangle-bg-image"
      :src="require(`../../asset/figmaElements/bg_image.png`)"
    />

    <div class="landing-page-sec">
      <div>
        <div class="description">
          <div class="intro-text">
            <h1>
              Building a game engine and experiences <br />
              on Fragnova’s decentralised network
            </h1>
          </div>

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
            />
            <img
              class="projects-img-rhythm"
              :src="require(`../../asset/figmaElements/rhythm_run_square_img.png`)"
            />
          </div>
        </div>
      </div>

      <technologySec />

      <teamSec class="team-sec-holder" />


      <!-- ===================================== news sec ===================================== -->

      <div class="homepage-news-sec">
        <h2>Blog</h2>
        <div class="homepage-news-sec-blog1">
          <!-- <div class="img_holder"></div> -->
          <img
            :src="require(`../../asset/figmaElements/AmbalDuelsLogo.png`)"
            class="img_holder"
            alt="blog"
            id="landing-blog-img1"
          />
          <h3>
            <!-- Fragcolor: Building the Decentralized Gaming Engine for the Open Metaverse -->
            Introducing Ambal Duels: The Tournament Goes Digital
          </h3>
          <p>
            <!-- Fragcolor has been born from this same vision — to build the ecosystem-driven
            decentralized gaming engine that allows anyone to develop and play games,
            interlink experiences, platforms and users. -->
            Following the success of Ambal Tournament strategy card game, a physical game
            funded on Kickstarter earlier this year and praised for its innovative
            gameplay and unique art style, Fragcolor is now bringing the Ambal experience
            to the digital realm under Ambal Duels.
          </p>
        </div>

        <div class="homepage-news-sec-blog2">
          <!-- <div class="img_holder"></div> -->
          <img
            :src="require(`../../asset/figmaElements/medium_blog4.jpeg`)"
            class="img_holder"
            alt="blog"
            id="landing-blog-img2"
          />
          <h3>User-generated Content: Mods and Game Creation Systems</h3>
          <p>
            Modding is the process of altering a game. Players of the game usually do
            this, and it can range from small changes to complete overhauls. This
            phenomenon has been around for decades, with fans wanting to improve the game
            or as a form of self-expression.
          </p>
        </div>

        <div class="team-join-us-btn">Read more</div>

        <!-- <div id="news-readmore-btn">
          <router-link to="/blog">

            <div class="homepage-blog-sec-showmore">
              <div
                class="blog-sec-show-more-btn"
                @mouseover="blogShowMoreBtnMouseOver"
                @mouseleave="blogShowMoreBtnMouseLeave"
              >
                <showMore id="blog-sec-show-more-btn" />
                <showMoreHover id="blog-sec-show-more-btn-hover" />
              </div>
            </div>
          </router-link>
        </div> -->
        
      </div>
    </div>
  </div>
</template>
