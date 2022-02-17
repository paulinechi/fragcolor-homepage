<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBottom.ts" module lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer-sec">
      <div class="logo">
        <a href="#page-top">
          <logoBlackWhite class="footer-logo" />
        </a>
      </div>

      <div class="footer-menu">
        <router-link to="/technology" class="footerMenuStyle"> Technology </router-link>
        <router-link to="/projects" class="footerMenuStyle"> Projects </router-link>
        <router-link to="/blog" class="footerMenuStyle"> Blog </router-link>
        <router-link to="/careers" class="footerMenuStyle"> Careers </router-link>        
        <a href="https://docs.fragcolor.xyz/" target="_blank" class="footerMenuStyle" id="terms-of-use"> Documentation </a>
        <!-- <router-link to="/press" class="footerMenuStyle"> Press </router-link> -->
        <!-- <router-link :to="{name: 'pressRelease',  params: {name: 'Fragments-Foundation-Raises-to-Expand-Fragcolor'} }" class="footerMenuStyle" append> Press </router-link> -->

        <router-link to="/Fragments-Foundation-Raises-to-Expand-Fragcolor" class="footerMenuStyle"> Press </router-link>

      </div>

      <div class="media-icons">
        <a href="https://twitter.com/fragcolor" target="_blank">
          <twitter class="icon" />
        </a>
        <a href="https://discord.fragcolor.com/" target="_blank">
          <discord class="icon" />
        </a>
        <a href="https://t.me/fragcolor" target="_blank">
          <telegram class="icon" />
        </a>
        <a href="https://medium.com/@fragcolor" target="_blank">
          <medium class="icon" />
        </a>
        <a href="https://www.linkedin.com/company/fragcolor/" target="_blank">
          <linkedIn class="icon" />
        </a>
        <a href="https://github.com/fragcolor-xyz" target="_blank">
          <github class="icon" />
        </a>
        <a href="https://angel.co/company/fragcolor" target="_blank">
          <angelList class="icon" />
        </a>
        <!-- <a href="https://opensea.io/collection/fragcolor" target="_blank">
          <opensea class="icon" />
        </a> -->
      </div>


      <!-- <div class="footer-submenu">
        <a href="https://docs.fragcolor.xyz/" target="_blank" class="footerMenuStyle" id="terms-of-use"> Documentation </a>
      </div> -->

      <div class="footer-submenu">
          <p class="footerMenuStyle footer-email-link">
            <a href="mailto:ask@fragcolor.com">ask@fragcolor.com</a>
          </p>        
        <!-- <a href="#" class="footerMenuStyle" id="terms-of-use"> Terms of Use </a>
        <a href="#" class="footerMenuStyle" id="privacy-policy"> Privacy Policy </a> -->
      </div>

      <div class="footer-copyright">
        <p>Copyright © 2021 Fragcolor Pte. Ltd.</p>
      </div>
    </div>
  </div>
</template>
