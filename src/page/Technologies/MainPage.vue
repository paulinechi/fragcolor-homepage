<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div
    class="mainPage technology-sec"
  >
    <!-- <img
      class="star-bg-image"
      :src="require(`../../asset/figmaElements/star_background.png`)"
      alt="Fragcolor Star Background"
    />
    <img
      class="grid-bg-image"
      :src="require(`../../asset/figmaElements/background-grid.png`)"
      alt="Fragcolor Grid Background"
    /> -->
    <!-- <global-header> </global-header> -->

    <div class="body">
      <!-- <social-bar /> -->
      <!-- <h2>Core Fragments Ecosystem Components</h2> -->
      <h2>Technology we are building</h2>
      <br />
      <br />

      <div class="technology hasten">
        <div class="text">
          <h1>Claymore</h1>
          <h3>
            Online multimedia platform and app
            <!-- Creativity Engine and the first dApp to build apps, games and virtual worlds. -->
          </h3>
          <p>
            A creative multi-platform app and framework that allows the swift development and publishing 
            of games and assets as well as the fruition of content, all in one place.
          </p>
          <a href="https://github.com/fragcolor-xyz/claymore" target="_blank">
            <githubBtn class="github-btn" />
            <img :src="require(`../../asset/figmaElements/mobile_github_purple_btn.png`)" class="github-btn-mobile" />
          </a>
        </div>
        <div class="image">
          <hastenLines id="hasten-lines"></hastenLines>
        </div>
      </div>

      <div class="technology chainblocks">
        <div class="chainblocks-image">
          <img :src="require(`../../asset/figmaElements/chainblocks_cubes.png`)" />
        </div>
        <div class="text">
          <h1>Chainblocks</h1>
          <h3>
            <!-- Game engine and scripting -->
            Programmable game engine and scripting tool
          </h3>
          <p>
            A low code way of producing high performance and multi-platform apps in the
            form of a scripting tool that can be both visual and textual at the same time.
            From low-fi 2D graphics to realistic modern 3D rendering, physics, audio. SOTA
            Features.
          </p>
          <a href="https://github.com/fragcolor-xyz/chainblocks" target="_blank">
            <githubBlueBtn class="github-btn" />
            <img :src="require(`../../asset/figmaElements/mobile_github_blue_btn.png`)" class="github-btn-mobile" />
          </a>
        </div>
        <div class="chainblocks-image-tablet">
          <img :src="require(`../../asset/figmaElements/chainblocks_cubes_tablet.png`)" />
        </div>
      </div>

      <div class="technology clamor">
        <div class="text">
          <h1>Clamor</h1>
          <h3>
            <!-- The protocol and networking stack. -->
            Substrate protocol and peer-to-peer networking stack
          </h3>
          <p>
            It is a Substrate utility chain, impartial distributed database and the
            permanent on-chain storage. Clamor acts as the core of the Peer-to-peer worlds
            technology.
          </p>
          <a href="https://github.com/fragcolor-xyz/clamor" target="_blank">
            <githubGreenBtn class="github-btn" />
            <img :src="require(`../../asset/figmaElements/mobile_github_green_btn.png`)" class="github-btn-mobile" />
          </a>
        </div>
        <div class="image">
          <img :src="require(`../../asset/figmaElements/clamor_image.png`)" />
        </div>
      </div>

      <!-- <description-bottom></description-bottom> -->
    </div>
  </div>
</template>
