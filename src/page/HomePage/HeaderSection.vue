<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HeaderSection.ts" module lang="ts"></script>

<template>
  <div class="header" id="page-top">
    <div class="top-menu-bar">
      <a>
        <img
          :src="require(`../../asset/figmaElements/horizontal_logo_menu.png`)"
          class="header-logo"
        />
      </a>

      <div class="nav-menu">
        <a
          href="/"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedHome"
          ><b>Home</b></a
        >
        <a
          href="/"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedHome == false"
          ><b>Home</b></a
        >

        <router-link
          to="/team"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedAbout"
          ><b>About</b></router-link
        >
        <router-link
          to="/team"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedAbout == false"
          ><b>About</b></router-link
        >
        <router-link
          to="/technology"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedTech"
          ><b>Technology</b></router-link
        >
        <router-link
          to="/technology"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedTech == false"
          ><b>Technology</b></router-link
        >
        <router-link
          to="/projects"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedProj"
          ><b>Projects</b></router-link
        >
        <router-link
          to="/projects"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedProj == false"
          ><b>Projects</b></router-link
        >
        <router-link
          to="/blog"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedBlog"
          ><b>Blog</b></router-link
        >

        <router-link
          to="/blog"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedBlog == false"
          ><b>Blog</b></router-link
        >
        <router-link
          to="/careers"
          class="nav-link titleStyle selectedTitle"
          style="max-width: 940px"
          v-if="selectedCareer"
          ><b>Careers</b></router-link
        >
        <router-link
          to="/careers"
          class="nav-link titleStyle"
          style="max-width: 940px"
          v-if="selectedCareer == false"
          ><b>Careers</b></router-link
        >

        <!-- <a href="https://docs.fragcolor.xyz/blocks/"><b>Developers Guide</b></a> -->
      </div>

      <div class="nav-menu-tablet">
        <select> 
          <option value="" selected="selected">Select</option> 
          
          <option value="/">Home</option> 
          <option value="/projects">Projects</option> 
          <option value="/blogs/five-simple-steps-blog">Blog</option> 
          <option value="/pages/about-us">About Us</option> 
          <option value="/pages/support">Support</option> 
        </select> 
      </div>

      <div class="subscribe-btn" v-on:click="showPopupWindow">Follow us</div>

      <div v-if="allowPopup" class="" id="popup">
        <div class="close" v-on:click="closePopupWindow">
          <close />
        </div>
        <popupGrid style="position: absolute" />
        <h1>Follow us</h1>
        <p class="desc">
          Sign up to stay up to date on our latest news, open calls, product updates and
          special promotions.
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

            <sendEmail id="send-email" />
            <p id="privacy-policy">
              By clicking “Send email” you agree to our Privacy Policy
            </p>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
