<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage team-page">
    <global-header> </global-header>

    <div class="body">
      <social-bar />

      <div class="team-page-about">
        <h1>About us</h1>
        <p class="team-page-description">
          Fragcolor was born with the vision to build a decentralized game
          engine and gaming platform to allow anyone to develop and play games, interlink
          experiences, platforms and users. To create an environment that provides
          ownership rights to its users and the right tools to establish new forms of
          monetization, independent of closed systems for its creators. Explore our team below.
        </p>
      </div>

      <div class="team-page-members">
        <h1 id="core-contributors">Team</h1>
        <div class="row">
          <div class="team-page-member-sec">
            <img
              class="team-page-member-sec-pic"
              :src="require(`../../asset/figmaElements/Gio_placeholder.jpg`)"
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
              :src="require(`../../asset/figmaElements/Nico_placeholder.png`)"
            />
            <h4>Nicolas Musset</h4>
            <p>Head of UX <br />10y+ Game Industry (game engines) Financial services</p>
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
              <!-- <a href="https://twitter.com/KryptosFR" target="_blank">
                <twitter class="team-page-social-icon" />
              </a> -->
            </div>
          </div>
        </div>

        <div class="row">
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
              <!-- <linkedIn class="team-page-social-icon" />
              <twitter class="team-page-social-icon" /> -->
              <a
                href="https://www.linkedin.com/in/pauline-chi-026727136/"
                target="_blank"
              >
                <linkedIn class="team-page-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="team-page-advisors">
        <h1 id="advisors">Our advisors</h1>
        <div class="row">
          <div class="team-page-advisor-sec">
            <img
              class="team-page-advisor-sec-pic"
              :src="require(`../../asset/figmaElements/Ed.jpg`)"
            />
            <h4>Ed Thompson</h4>
            <p>
              Decentralized Gaming Association (Founder) <br />
              Ex-Web3 Foundation <br />
              (Grants Manager)
            </p>
          </div>

          <div class="team-page-advisor-sec">
            <img
              class="team-page-advisor-sec-pic"
              :src="require(`../../asset/figmaElements/Supriyo.jpg`)"
            />
            <h4>Supriyo Roy</h4>
            <p>
              CEO @ Hyy.pe <br />
              Design & UX Expert <br />
              Amazon (UX/ Alexa) <br />
              Microsoft (UX)
            </p>
          </div>

          <div class="team-page-advisor-sec">
            <img
              class="team-page-advisor-sec-pic"
              :src="require(`../../asset/figmaElements/Doug.jpg`)"
            />
            <h4>Doug Thompson</h4>
            <p>
              Founder,Bureau of Bright Ideas, a strategic agency for the Metaverse. <br />
              CEO and Co-Founder of dot3, focused on proximity technologies.
            </p>
          </div>

          <div class="team-page-advisor-sec">
            <img
              class="team-page-advisor-sec-pic"
              :src="require(`../../asset/figmaElements/Alex.jpg`)"
            />
            <h4>
              Alex Amsel <br />
              (aka Sillytuna)
            </h4>
            <p>
              Game Developer <br />
              Crypto OG <br />
              NFT Enthusiast
            </p>
          </div>
        </div>
      </div>

      <div class="team-page-investors">
        <h1>Our investors</h1>
        <div class="team-page-investor-holder">
          <div class="row">
            <investor5 id="investor1" class="team-page-investor-logo" />
            <investor2 id="investor2" class="team-page-investor-logo" />
            <investor6 id="investor3" class="team-page-investor-logo" />
          </div>

          <div class="row">
            <investor7 id="investor4" class="team-page-investor-logo" />

            <img
              id="investor7"
              class="team-page-investor-logo"
              :src="require(`../../asset/figmaElements/8.png`)"
            />

            <img
              id="investor6"
              class="team-page-investor-logo"
              :src="require(`../../asset/figmaElements/5.png`)"
            />
            <img
              id="investor5"
              class="team-page-investor-logo"
              :src="require(`../../asset/figmaElements/3.png`)"
            />
          </div>
        </div>
      </div>

      <description-bottom ref="" />
    </div>
  </div>
</template>
