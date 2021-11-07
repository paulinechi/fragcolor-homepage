<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBody.ts" module lang="ts"></script>

<template>
  <!-- ===================================== landing page ===================================== -->
  <div class="homePageMainPage">
    <landingPageGrid id="landingGrid" />

    <div>
      <div class="description">
        <div class="intro-text">
          <h1>We are building the engine for a distributed gaming ecosystem</h1>
        </div>

        <div class="description-text">
          <h3>
            <!-- Fragcolor was born with a vision to build the ecosystem-driven distributed
            gaming engine that allows anyone to develop and play games, interlink
            experiences, platforms and users.
            <br /><br />
            To create an environment that provides ownership rights to its users and the
            right tools to establish new forms of monetization, independent of closed
            systems for its creators. -->

            Our creator tools allow for absolute interoperability of game data and logic, 
            independence from market-dominant closed systems and decentralized value distribution.
          </h3>
        </div>

        <div style="margin-top: 5vw">
          <a
            href="https://medium.com/@fragcolor/fragcolor-building-the-decentralized-gaming-engine-for-the-open-metaverse-25215b28584e"
          >
            <readMore />
          </a>
        </div>
      </div>
    </div>

    <!-- ===================================== intro video ===================================== -->
    <div class="intro-video-holder">
      <img
        id="intro-video"
        :src="require(`../../asset/image/Fragcolor_Metaverse.png`)"
        alt="Fragcolor Intro Video"
      />
    </div>

    <!-- ============================== value proposition ================================= -->

    <div class="value-proposition-sec" id="valueProposition">
      <img
        id="value-prop-grid"
        :src="require(`../../asset/figmaElements/value_prop_grid.png`)"
        alt="Fragcolor Intro Video"
      />
      <h2>Our Value Proposition</h2>

      <div id="create-to-earn">
        <h4><strong>Create-to-earn</strong></h4>
        <p>
          We are building an environment that provides ownership rights to its users and
          the right tools to establish new forms of monetization, independent of closed
          systems for its creators.
        </p>
      </div>
      <valulePropElement2 id="valuePropElement2" />
      <valulePropElement3 id="valuePropElement3" />

      <div id="low-barriers-to-entry">
        <h4><strong>Low barriers to entry</strong></h4>
        <p>
          In the Create to Earn model, game developers don't pay a fee to include a
          Fragment into their own game. Instead, a percentage of royalties is allocated to
          the original creators and contributors.
        </p>
      </div>

      <div id="open-to-all">
        <h4><strong>Open to all</strong></h4>
        <p>
          The benefits of the staking model allow for revenue sharing and generation at
          all levels - whether one is creating, curating or staking the Fragments assets.
        </p>
      </div>
      <valulePropElement1 id="valuePropElement1" />
    </div>

    <!-- ===================================== our projects ===================================== -->

    <div class="homepage-projects-sec">
      <h1>Our Projects</h1>

      <div class="homepage-projects-sec-text" v-if="selectedProject1">
        <h2>Ambal Tournament</h2>
        <p>
          Duel in a high fantasy land, mastering your skills in strategic battles with
          simultaneous game play. Collect decks and characters to create powerful builds
          in this RPG inspired card game.
        </p>
        <forwardArrow id="forward-arrow" v-on:click="prevProject" />
        <backwardArrow id="backward-arrow" v-on:click="nextProject" />
      </div>

      <div class="homepage-projects-sec-text" v-if="selectedProject2">
        <h2>Endless by Pau Rosello</h2>
        <p>
          Endless is an immutable real time art generated on minting by primary sale buyers
           building on top of creator's work. The series is inspired by the Swiss architect
            Max Bill’s "Quinze variations sur un même thème" ...
        </p>
        <forwardArrow id="forward-arrow" v-on:click="prevProject" />
        <backwardArrow id="backward-arrow" v-on:click="nextProject" />
      </div>

      <div class="homepage-projects-sec-image" v-if="selectedProject1">
        <div id="homepage-projects-sec-image1">
          <img
            :src="require(`../../asset/figmaElements/ambal.png`)"
            class="homepage-projects-sec-image-holder"
            alt="Ambal"
          />
        </div>
        <div id="homepage-projects-sec-image2">
          <img
            :src="require(`../../asset/figmaElements/pau_infinity_drop.png`)"
            class="homepage-projects-sec-image-holder homepage-proj-second-image"
            alt="Pau's Infinity Drop"
          />
        </div>
      </div>

      <div class="homepage-projects-sec-image" v-if="selectedProject2">
        <div id="homepage-projects-sec-image1">
          <img
            :src="require(`../../asset/figmaElements/pau_infinity_drop.png`)"
            class="homepage-projects-sec-image-holder"
            alt="Ambal"
          />
        </div>
        <div id="homepage-projects-sec-image2">
          <img
            :src="require(`../../asset/figmaElements/ambal.png`)"
            class="homepage-projects-sec-image-holder homepage-proj-second-image"
            alt="Pau's Infinity Drop"
          />
        </div>
      </div>

      <div class="homepage-projects-sec-showmore">
        <a href="/projects">
          <showMore />
        </a>
      </div>
    </div>


    <!-- ===================================== quote ===================================== -->

    <div class="homepage-quote-sec" v-if="selectedQuote1">
      <quoteSign id="homepage-quote-sec-quote" />
      <h3 id="homepage-quote-sec-text">
        With a strong team with extensive game development background and solid products, 
        Fragcolor is going to raise the bar for blockchain gaming projects in the crypto space. 
        This investment marks our continued focus in the blockchain game ecosystem.
      </h3>
      <h3 id="homepage-quote-sec-investor">DWEb3</h3>
      <p id="homepage-quote-sec-investor-desc">Lorem ipsum dolor</p>

      <div class="pagination">
        <forwardArrow id="homepage-quote-sec-forward-arrow" v-on:click="prevQuote" />
        <div class="pagination-blocks-selected"></div>
        <div class="pagination-blocks"></div>
        <backwardArrow id="homepage-quote-sec-backward-arrow" v-on:click="nextQuote" />
      </div>
    </div>

    <div class="homepage-quote-sec" v-if="selectedQuote2">
      <quoteSign id="homepage-quote-sec-quote" />
      <h3 id="homepage-quote-sec-text">
        Fragments Foundation organically combines Metaverse and Web3 at such a point in time, 
        building a set of user-friendly game development engines and crypto native solutions. 
         The shackles of centralized games no longer restrict users; instead, they can devote 
         themselves to develop  and experience games in the metaverse, thus fully enjoying the 
         value brought about by Web3.
      </h3>
      <h3 id="homepage-quote-sec-investor">ArkStream Capital</h3>
      <p id="homepage-quote-sec-investor-desc">Lorem ipsum dolor</p>

      <div class="pagination">
        <forwardArrow id="homepage-quote-sec-forward-arrow" v-on:click="prevQuote" />
        <div class="pagination-blocks"></div>
        <div class="pagination-blocks-selected"></div>
        <backwardArrow id="homepage-quote-sec-backward-arrow" v-on:click="nextQuote" />
      </div>
    </div>

    <!-- ===================================== newsletter ===================================== -->
    <newsLetterElement1 id="newsletter-sec-element1" />
    <newsLetterElement2 id="newsletter-sec-element2" />
    <newsLetterElement3 id="newsletter-sec-element3" />

    <div class="homepage-newsletter-sec">
      <newsletterGrid style="position: absolute" />
      <h1>Join Our Newsletter</h1>
      <p>
        Sign up to stay up to date on our latest news, open calls, product updates and special 
        promotions.
      </p>
      <div class="newsletter-email">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Subscribe</b-button>
        </b-form>
      </div>
    </div>

    <!-- ===================================== news sec ===================================== -->

    <div class="homepage-news-sec">
      <h2>Latest news</h2>
      <div class="homepage-news-sec-blog1">
        <!-- <div class="img_holder"></div> -->
        <img
          :src="require(`../../asset/image/fragcolor_background.png`)"
          class="img_holder"
          alt="blog"
          id="landing-blog-img"
        />
        <h3>
          Fragcolor: Building the Decentralized Gaming Engine for the Open Metaverse
        </h3>
        <p>
          Fragcolor has been born from this same vision — to build the ecosystem-driven
          decentralized gaming engine that allows anyone to develop and play games,
          interlink experiences, platforms and users.
        </p>
      </div>

      <div class="homepage-news-sec-blog2">
        <!-- <div class="img_holder"></div> -->
        <img
          :src="require(`../../asset/image/fragcolor_blog2.png`)"
          class="img_holder"
          alt="blog"
        />
        <h3>Create to Earn Economy and the Bottom-up Fragment Model</h3>
        <p>
          “Create to Earn”, a creator-centric Play to Earn analogy, is introduced by 
          Fragcolor to describe the new economic possibilities it is building for game 
          asset creators, which, in turn, provide an alternative path of monetization.
        </p>
      </div>
      <div id="news-readmore-btn">
        <a href="/blog">
          <readMore />
        </a>
      </div>
    </div>
  </div>
</template>
