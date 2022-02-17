<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage team-page">
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
    <global-header> </global-header>

    <div class="body">
      <social-bar />

      <div class="team-page-members">
        <h1 id="core-contributors">Team</h1>
        <div class="row">
          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Giovanni.jpg`)"
            />
            <h4>Giovanni Petrantoni</h4>
            <p>
              CEO & CTO <br />
              15 years+ Game Industry (game engines) ETH2/libp2p
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/giovanni-petrantoni/" target="_blank">
                <linkedIn class="team-page-social-icon" />
              </a>
              <a href="https://twitter.com/voidtarget" target="_blank">
                <twitter class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Nicolas.jpg`)"
            />
            <h4>Nicolas Musset</h4>
            <p>
              Head of UX <br />10y+ Game Industry (game engines) <br />
              Financial services
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/nmusset/" target="_blank">
                <linkedIn class="team-page-social-icon" />
              </a>
              <a href="https://twitter.com/KryptosFR" target="_blank">
                <twitter class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Guus.jpg`)"
            />
            <h4>Guus Waals</h4>
            <p>
              Game Engine Lead <br />
              5 years+ Game Industry (AAA, mobile games, game engines)
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/guus-waals-4a7640110/" target="_blank">
                <linkedIn class="team-page-social-icon" />
              </a>
            </div>
          </div>
          
          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Aleksandra.jpg`)"
            />
            <h4>Aleksandra Artamonovskaja</h4>
            <p>
              Head of Marketing <br />
              5 years+ Art & Technology (DNS, Digital Arts, Media)
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/aleksandraart/" target="_blank">
                <linkedIn class="team-page-social-icon" />
              </a>
              <a href="https://twitter.com/aljaparis" target="_blank">
                <twitter class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Bernardo.jpg`)"
            />
            <h4>Bernardo Bittencourt</h4>
            <p>
              Game Designer <br />
              5 years+ Game design <br />
              (Ambal Tournament creator)
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/bbittencourt/" target="_blank">
                <linkedIn class="team-page-social-icon" />
              </a>
              <a href="https://twitter.com/BernBitt" target="_blank">
                <twitter class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Pauline.jpg`)"
            />
            <h4>Pauline Chi</h4>
            <p>
              Head of Web Development <br />
              3 years+ Game Industry
            </p>
            <div class="team-page-member-sec-social">
              <a
                href="https://www.linkedin.com/in/pauline-chi-026727136/"
                target="_blank"
              >
                <linkedIn class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/satendra.jpg`)"
            />
            <h4>Satendra Singh</h4>
            <p>
              Technical Writer @ Fragcolor<br />
              16 years+ of Code & Docs (Mainframes, JS, UI/UX)
            </p>
            <div class="team-page-member-sec-social">
              <a href="https://www.linkedin.com/in/satendrapals/" target="_blank">
                <!-- <img
                  class="team-page-social-icon-tablet"
                  :src="require(`../../asset/figmaElements/linkedin_team.png`)"
                /> -->
                <linkedIn class="team-page-social-icon" />

              </a>
              <a href="https://twitter.com/singhs_ink" target="_blank">
                <!-- <twitter class="team-page-social-icon" /> -->
                <!-- <img
                  class="team-page-social-icon-tablet"
                  :src="require(`../../asset/figmaElements/twitter_team.png`)"
                /> -->
                <twitter class="team-page-social-icon" />
              </a>
            </div>
          </div>

          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Eimran.png`)"
            />
            <h4>Eimran Jumahat</h4>
            <p>
              Digital Designer @ Fragcolor <br />
              7 years+ of Digital Art (Concept Arts, Illustrations, Media, UI/UX)
            </p>
            <div class="team-page-member-sec-social">
              <!-- <linkedIn class="team-page-social-icon" />
              <twitter class="team-page-social-icon" /> -->
              <a
                href="https://www.linkedin.com/in/eimranjumahat/"
                target="_blank"
              >
                <!-- <linkedIn class="team-page-social-icon" /> -->
                <!-- <img
                  class="team-page-social-icon-tablet"
                  :src="require(`../../asset/figmaElements/linkedin_team.png`)"
                /> -->
              <linkedIn class="team-page-social-icon" />

              </a>
            </div>
          </div>
        
          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Shah.jpg`)"
            />
            <h4>Muhammad Shaherfi</h4>
            <p>
              Game Designer @ Fragcolor<br />
              1 years+ Game design Experience (Unity)
            </p>
            <div class="team-page-member-sec-social">
              <a href="www.linkedin.com/in/shaherfi" target="_blank">
                <!-- <linkedIn class="team-page-social-icon" /> -->
                <!-- <img
                  class="team-page-social-icon-tablet"
                  :src="require(`../../asset/figmaElements/linkedin_team.png`)"
                /> -->
              <linkedIn class="team-page-social-icon" />

              </a>
            </div>
          </div>

        </div>
      </div>

      <div class="team-join-us-btn">Be part of the team</div>

    </div>
  </div>
</template>
