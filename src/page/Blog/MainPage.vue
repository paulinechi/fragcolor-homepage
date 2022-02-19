<style src="" module lang="scss"></style>

<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage blog-sec">
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
      <div class="blog-sec">
        <div class="row">
          <div id="blog1">
            <div class="layer"></div>
            <img :src="blogs[0].img" class="img_holder" alt="blog" id="blogpage-img1" />

            <a :href="blogs[0].linkToMedium" target="_blank">
              <div class="text_holder">
                <p class="date">{{ blogs[0].date }}</p>
                <h2>{{ blogs[0].title }}</h2>
                <p class="blog-description">{{ blogs[0].description }}</p>
                <p class="author">{{ blogs[0].author }}</p>
              </div>
            </a>
          </div>
        </div>

        <div class="row">
          <div id="blog2">
            <a :href="blogs[1].linkToMedium" target="_blank">
              <img :src="blogs[1].img" class="img_holder" alt="blog" />
            </a>
            <div class="text_holder">
              <p class="date">{{ blogs[1].date }}</p>
              <h2>{{ blogs[1].title }}</h2>
              <p class="author">{{ blogs[1].author }}</p>
            </div>
          </div>

          <div id="blog3">
            <a :href="blogs[2].linkToMedium" target="_blank">
              <img :src="blogs[2].img" class="img_holder" alt="blog" />
            </a>
            <div class="text_holder">
              <p class="date">{{ blogs[2].date }}</p>
              <h2>{{ blogs[2].title }}</h2>
              <p class="author">{{ blogs[2].author }}</p>
            </div>
          </div>

          <div id="blog4">
            <a :href="blogs[3].linkToMedium" target="_blank">
              <img :src="blogs[3].img" class="img_holder" alt="blog" />
            </a>
            <div class="text_holder">
              <p class="date">{{ blogs[3].date }}</p>
              <h2>{{ blogs[3].title }}</h2>
              <p class="author">{{ blogs[3].author }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div id="blog5">
            <a :href="blogs[4].linkToMedium" target="_blank">
              <img :src="blogs[4].img" class="img_holder" alt="blog" />
            </a>
            <div class="text_holder">
              <p class="date">{{ blogs[4].date }}</p>
              <h2>{{ blogs[4].title }}</h2>
              <p class="author">{{ blogs[4].author }}</p>
            </div>
          </div>
        </div>
      </div>

      <description-bottom></description-bottom>
    </div>
  </div>
</template>
