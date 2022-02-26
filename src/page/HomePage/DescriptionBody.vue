<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBody.ts" module lang="ts"></script>

<template>
  <!-- ===================================== landing page ===================================== -->
  <div class="homePageMainPage">
    <img style="display: none" :src="require(`../../asset/figmaElements/favicon.png`)" />

    <img
      class="triangle-bg-image"
      :src="require(`../../asset/figmaElements/bg_image.png`)"
    />

    <div class="landing-page-sec">
      <div>
        <div class="description">
          <div class="intro-text">
            <h1>Empowering the <br /> Open Metaverse builders</h1>
          </div>

          <div id="about-sec"></div>
          <br /><br /><br /><br />
          <div class="description-text">
            <!-- <h1>About</h1> -->
            <h3>
              We are a Singapore based game studio with the mission to build the first
              interoperability & moddability native game engine to empower builders of
              games, virtual worlds and interactive experiences.
            </h3>
            <br />

            <!-- <h3 class="description-subtext">
              We are also the studio behind Ambal Duels and Rhythm Run
            </h3> -->
          </div>
        </div>
      </div>

      <div class="project-sec">
        <h2>Games we are building</h2>
        <!-- <br />
        <br /> -->

        <div class="technology hasten ambal">
          <div class="text">
            <h1>Ambal</h1>
            <p>
              Duel in a high fantasy land, mastering player's skills in strategic battles
              with simultaneous game play. Collect cards and soulstones to create powerful
              builds in this RPG inspired card game.
            </p>
            <a href="https://medium.com/@fragcolor/introducing-ambal-duels-the-tournament-goes-digital-45ee4f4b8f4f" style="text-decoration: none;">
              <button class="project-read-more-btn">Read more</button>
            </a>
          </div>
          <div class="image">
            <img
              class="projects-img-rhythm"
              id="hasten-lines"
              :src="require(`../../asset/figmaElements/ambal_square_img.png`)"
            />
          </div>
        </div>

        <div class="technology chainblocks sound-game">
          <div class="chainblocks-image sound-game-image">
            <img
              class="projects-img-rhythm"
              :src="require(`../../asset/figmaElements/rhythm_run_square_img.png`)"
            />
          </div>
          <div class="text">
            <h1>Rhythm Run</h1>
            <p>
              Rhythm Run is a 2d side scrolling multiplayer run and gun game where players
              survive and attack by using rhythm. By understanding patterns within a game
              players are able to increase their damage, thus advancing their ranking.
            </p>
            <a href="https://medium.com/@fragcolor/introducing-rhythm-run-124240ec4988" style="text-decoration: none;">
              <button class="project-read-more-btn">Read more</button>
            </a>
          </div>
          <div class="chainblocks-image-tablet sound-game-tablet">
            <img
              class="projects-img-rhythm"
              :src="require(`../../asset/figmaElements/rhythm_run_square_img.png`)"
            />
          </div>
        </div>
      </div>




      <technologySec id="technology-sec" />

      <div id="team-sec"></div>
      <br /><br /><br />
      <teamSec class="team-sec-holder" />

      <!-- ===================================== news sec ===================================== -->
      <div id="blog-sec"></div>
      <div class="homepage-news-sec">
        <h2>Blog</h2>
        <div class="homepage-news-sec-blog1">
          <a
            href="https://medium.com/@fragcolor/introducing-rhythm-run-124240ec4988"
            target="_blank"
          >
            <img
              :src="require(`../../asset/figmaElements/medium_blog_rhythm.png`)"
              class="img_holder"
              alt="blog"
              id="landing-blog-img1"
            />
          </a>

          <h3>Introducing: Rhythm Run</h3>
          <p>
            At Fragcolor, our mission is to utilize distributed technologies to provide
            tools for game creators to allow the creation of interoperable moddable games.
            As a first step towards the vision of making anyone the architect of the Open
            Metaverse...
          </p>
        </div>

        <div class="homepage-news-sec-blog2">
          <a
            href="https://medium.com/@fragcolor/game-engines-fragcolor-and-rewards-for-creators-16fbb13edb2b"
            target="_blank"
          >
            <img
              :src="require(`../../asset/figmaElements/medium_blog_game_engine.png`)"
              class="img_holder"
              alt="blog"
              id="landing-blog-img2"
            />
          </a>
          <h3>Game Engines, Fragcolor and Rewards for Creators</h3>
          <p>
            To understand the true value of Fragcolor, it is crucial to take a step back
            and learn about what a game engine is and the functions it serves. In a
            nutshell, a game engine refers to a game development software that...
          </p>
        </div>
      </div>

      <a
        href="https://medium.com/@fragcolor"
        target="_blank"
        style="text-decoration: none"
      >
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
