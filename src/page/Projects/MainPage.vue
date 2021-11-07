<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage">
    <global-header> </global-header>

    <div class="body">
      <social-bar />
      <div class="projects-sec">
        <div class="projects">
          <div id="project_1">
            <a href="https://ambaltournament.com">
              <img
                :src="require(`../../asset/figmaElements/ambal.png`)"
                id="ambal-image"
                alt="Ambal"
              />
            </a>

            <div class="proj-description">
              <h3><strong>Ambal Tournament</strong></h3>
              <p>
                Duel in a high fantasy land, mastering your skills in strategic battles
                with simultaneous game play. Collect decks and characters to create
                powerful builds in this RPG inspired card game.
              </p>
            </div>
          </div>

          <div id="project_2">
            <div class="image_holder">
              <a href="https://paurosello.net/endless/#/">
                <img
                  id="pau_infinity"
                  :src="require(`../../asset/figmaElements/pau_infinity_drop.png`)"
                  alt="Infinity Art"
                />
              </a>
            </div>
            <div class="proj-description">
              <h3>Endless by Pau Rosello</h3>
              <p>
                Endless is an immutable real time art generated on minting by primary sale
                buyers building on top of creator's work. The series is inspired by the
                Swiss architect Max Bill’s "Quinze variations sur un même thème" ...
              </p>
            </div>
          </div>
        </div>
        <projectElement1 id="project_element_1" />
        <projectElement2 id="project_element_2" />
        <projectElement3 id="project_element_3" />
        <projectElement4 id="project_element_4" />
      </div>

      <description-bottom ref="" />
    </div>
  </div>
</template>
