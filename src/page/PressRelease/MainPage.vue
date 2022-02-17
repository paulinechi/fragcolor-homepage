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

      <div class="press-release-sec">
        <h2>
          Fragments Foundation Raises $2.6M to Expand Fragcolor’s Distributed Game Engine,
          Asset Store and Gaming Platform
        </h2>
        <p class="date">3rd Dec 2021</p>
        <p></p>

        <ul>
          <li>
            Fragments Foundation, the organization behind the video game and software
            development company Fragcolor, has raised $2.6 million in its first round of
            the $FRAG token pre-sale.
          </li>
          <li>
            The round was led by Animoca Brands with participation by Outlier Ventures,
            Sfermion, Lemniscap, Iconium, Double Peak, ArkStream Capital, Momentum 6, LD
            Capital, DWeb3, Existential, Taureon, Signal Ventures, Athena Ventures and
            GAINZ Associates, among others.
          </li>
          <li>
            The Fragments Foundation is the custodian of the Fragments ecosystem and
            lighthouse to Fragcolor. Through its core game engine components, Fragcolor
            uses distributed technologies to provide an easy to use game creation system
            with interoperable elements and a built-in royalty distribution system to help
            developers harness incentives in open gaming environments.
          </li>
          <li>
            With the funding, the Fragments ecosystem will expand to reach new artists,
            game developers and partners, while growing Fragcolor’s team as Fragcolor
            prepares to launch its first in-house game, Ambal Duels.
          </li>
        </ul>

        <p>
          Fragments Foundation, the organization backing Fragcolor, the video game and
          software development company, has raised $2.6 million in its first round of the
          $FRAG token pre-sale.
        </p>
        <p>
          The round is led by Animoca Brands with participation by Outlier Ventures,
          Sfermion, Lemniscap, Iconium, Double Peak, ArkStream Capital, Momentum 6, LD
          Capital, DWeb3, Existential, Taureon, Signal Ventures, Athena Ventures and GAINZ
          Associates, among others.
        </p>
        <p>
          "Animoca Brands is proud to lead the round," said Yat Siu, the co-founder and
          executive chairman of Animoca Brands. "The future of the gaming industry is
          being written now by companies like Fragcolor, who are building some of the
          essential tools that will make the open metaverse a reality. We believe that
          Fragcolor will help to shift gaming away from the gated ecosystem approach
          favoured by the established tech corporations seeking to monopolize the digital
          experience."
        </p>
        <p>
          Fragcolor directly addresses the issues of the current gaming environment, which
          lacks incentives for content creators and is increasingly driven by inflated
          economies. By building accessible tools to establish new forms of monetization,
          independent of closed systems, Fragcolor is creating a more equitable and open
          gaming ecosystem in favor of its users and builders.
        </p>
        <p>
          Fragcolor is using distributed technologies to provide an easy to use game
          creation system, interoperable components and a built-in royalty distribution
          system, which will help address the existing market inefficiencies. Through its
          core game engine components, Fragcolor is developing the Hasten game creation
          and portal app, the programmable game engine and scripting tool Chainblocks, in
          addition to the Clamor substrate protocol and peer-to-peer networking stack. The
          products will power the Fragments ecosystem, allowing anyone to develop and play
          games, interlink experiences and users on the blockchain using Fragcolor-native
          NFTs - Fragments.
        </p>
        <p>
          In Fragcolor's Create-to-Earn model, a percentage of proceeds from games built
          with its native NFTs, Fragments, will become a perpetual stream of revenue to
          the original creators, contributors and even players. Everyone with $FRAG tokens
          will be able to take advantage of the staking system. The $FRAG token will be
          released next year. With the funding, the Fragments ecosystem will expand to
          reach new artists, game developers and partners, while growing Fragcolor’s team
          as Fragcolor prepares to launch its first in-house strategy card game, Ambal
          Duels.
        </p>

        <div class="press-sec-download-logos">
          <p id="download-logo-btn" v-on:click="downloadLogos">
            Download Fragcolor Logos
          </p>
          <!-- <a :href="require(`../../asset/figmaElements/Fragcolor_logos.zip`)" download="star_background.png">Download Fragcolor Logos</a> -->
          <!-- <a href="../../asset/figmaElements/star_background.png" download="star_background.png">Download Fragcolor Logos</a> -->
          <!-- <a href="https://app.box.com/s/yk6z9e0qo8idicsesn1yjsvxa2iyz1t3" download="star_background.png">Download Fragcolor Logos</a> -->
        </div>
      </div>

      <description-bottom ref="" />
    </div>
  </div>
</template>
