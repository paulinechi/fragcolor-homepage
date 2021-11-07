<style src="./HomePage.scss" module lang="scss"></style>

<script src="./DescriptionBottom.ts" module lang="ts"></script>

<template>
  <div class="footer">
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
    </div>

    <div class="media-icons">
      <a href="https://twitter.com/fragcolor" target="_blank">
        <twitter class="icon" />
      </a>
      <a href="https://discord.com/invite/c7mjxvYqd3" target="_blank">
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
      <a href="https://opensea.io/collection/fragcolor" target="_blank">
        <opensea class="icon" />
      </a>
    </div>

    <div class="footer-submenu">
      <a href="#" class="footerMenuStyle"> Terms of Use </a>
      <a href="#" class="footerMenuStyle"> Privacy Policy </a>
    </div>

    <div class="footer-copyright">
      <p>Copyright © 2021 Fragcolor Pte. Ltd.</p>
    </div>
  </div>
</template>
