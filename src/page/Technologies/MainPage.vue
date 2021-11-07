<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage" :src="require(`../../asset/figmaElements/background-grid.png`)">
    <global-header> </global-header>

    <div class="body">
      <social-bar />

      <div class="technology hasten">
        <div class="text">
          <h1>Hasten</h1>
          <h3>
            Creativity Engine and the first dApp to build apps, games and virtual worlds.
          </h3>
          <p>
            A low code, immediate and batteries included creative framework to build fast
            and efficient multi-platform applications in the form of distributed digital
            assets.
          </p>
          <a href="https://github.com/fragcolor-xyz/hasten" target="_blank">
            <githubBtn class="github-btn"  />
          </a>
        </div>
        <div class="image">
          <hastenLines></hastenLines>
        </div>
      </div>

      <div class="technology chainblocks">
        <div class="chainblocks-image">
          <img :src="require(`../../asset/figmaElements/chainblocks_cubes.png`)" />
        </div>
        <div class="text">
          <h1>Chainblocks</h1>
          <h3>Game engine and scripting</h3>
          <p>
            A low code way of producing high performance and multi-platform apps in the
            form of a scripting tool that can be both visual and textual at the same time.
            From low-fi 2D graphics to realistic modern 3D rendering, physics, audio. SOTA
            Features.
          </p>
          <a href="https://github.com/fragcolor-xyz/chainblocks" target="_blank">
            <githubBlueBtn class="github-btn"  />
          </a>
        </div>
      </div>

      <div class="technology clamor">
        <div class="text">
          <h1>Clamor</h1>
          <h3>The protocol and networking stack.</h3>
          <p>
            It is a Substrate utility chain, impartial distributed database and the
            permanent on-chain storage. Clamor acts as the core of the Peer-to-peer worlds
            technology.
          </p>
          <a href="https://github.com/fragcolor-xyz/clamor" target="_blank">
            <githubGreenBtn class="github-btn"  />
          </a>
        </div>
        <div class="image">
          <img :src="require(`../../asset/figmaElements/clamor_image.png`)" />
        </div>
      </div>

      <description-bottom></description-bottom>
    </div>
  </div>
</template>
