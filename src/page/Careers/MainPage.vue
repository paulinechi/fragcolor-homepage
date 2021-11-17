<style src="" module lang="scss"></style>
<script src="./MainPage.ts"></script>

<template>
  <div class="mainPage careers-page-sec">
    <div class="blur-foreground" v-if="allowPopup"></div>

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

      <!-- ------------------------------- form submission status ---------------------------- -->
      <!-- ------------------------------- successful ---------------------------- -->

      <div v-if="submitSuccessful && allowPopup" class="cv-feedback-sec" id="popup">
        <div class="close" v-on:click="closePopupWindow">
          <close />
        </div>
        <popupGrid id="popup-grid" style="position: absolute" />

        <div class="cv-successfully">
          <cvSentSuccessfully />
        </div>

        <h1>CV sent successfully</h1>
        <div class="got-it-btn" v-on:click="closePopupWindow">
          <cvGotItBtn />
        </div>
      </div>

      <!-- ------------------------------- failed ---------------------------- -->

      <div v-if="submitFailed && allowPopup" class="cv-feedback-sec" id="popup">
        <div class="close" v-on:click="closePopupWindow">
          <close />
        </div>
        <popupGrid  id="popup-grid"  style="position: absolute" />

        <div class="cv-successfully">
          <cvSentFailed />
        </div>

        <h1 class="msg-not-sent">Something went wrong</h1>
        <p>Message not sent</p>
        <div class="got-it-btn" v-on:click="closePopupWindow">
          <cvTryAgainBtn />
        </div>
      </div>

      <!-- ---------------------------------------------------- job lists ----------------------------------------------------  -->
      <div class="career-page-job-list" v-if="backToJobList">
        <div class="careers-sec">
          <div class="careers-sec-header">
            <h1>Opportunities at Fragcolor</h1>
            <p>
              Fragcolor is on a mission to allow everyone to develop and play games,
              interlink experiences, platforms and users. Join us.
            </p>
          </div>

          <div
            class="job-sec game-engine"
            v-on:click="
              selectedGameEngineProgrammer = true;
              backToJobList = false;
              selectedSubstractProgrammer = false;
              selectedMarketingIntern = false;
            "
          >
            <div class="job-sec-text">
              <p>Engineering</p>
              <h1>Game Engine Programmer</h1>
            </div>
            <div class="job-sec-img">
              <careersProp1 class="img-holder" />
              <arrow class="arrow" />
            </div>
          </div>

          <div
            class="job-sec substrate-engineer"
            v-on:click="
              selectedSubstractProgrammer = true;
              backToJobList = false;
              selectedGameEngineProgrammer = false;
              selectedMarketingIntern = false;
            "
          >
            <div class="job-sec-text">
              <p>Engineering</p>
              <h1>Substrate Engineer</h1>
            </div>
            <div class="job-sec-img">
              <careersProp2 class="img-holder" />
              <arrow class="arrow" />
            </div>
          </div>

          <div
            class="job-sec marketing"
            v-on:click="
              selectedMarketingIntern = true;
              backToJobList = false;
              selectedSubstractProgrammer = false;
              selectedGameEngineProgrammer = false;
            "
          >
            <div class="job-sec-text">
              <p>Marketing</p>
              <h1>Marketing Intern</h1>
            </div>
            <div class="job-sec-img">
              <careersProp3 class="img-holder" />
              <arrow class="arrow" />
            </div>
          </div>
        </div>

        <!-- ---------------------------------------------------- apply form ----------------------------------------------------  -->

        <div class="apply-sec-header">
          <h2>Didn't find the right opportunity that fits you?</h2>
          <div class="form">
            <newsletterGrid id="career-form-grid" style="position: absolute" />

            <div class="careers-sec-form">
              <b-form id="resume-form" enctype="multipart/form-data" @submit="onSubmit">
                <div class="careers-sec-form-floatLeft">
                  <b-form-group id="careers-sec-form-firstName" label-for="input-1">
                    <b-form-input
                      id="input-firstname"
                      v-model="firstname"
                      placeholder="First name"
                      required
                      class="form-input"
                      name="firstname"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-lastName" label-for="input-1">
                    <b-form-input
                      id="input-lastname"
                      v-model="lastname"
                      placeholder="Last name"
                      required
                      class="form-input"
                      name="lastname"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-email" label-for="input-1">
                    <b-form-input
                      id="input-email"
                      v-model="email"
                      type="email"
                      placeholder="Email"
                      required
                      class="form-input"
                      name="email"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="careers-sec-form-floatRight">
                  <b-form-group id="careers-sec-form-website" label-for="input-1">
                    <b-form-input
                      id="input-website"
                      v-model="websiteLink"
                      placeholder="LinkedIn / Github / Personal website"
                      required
                      class="form-input"
                      name="website"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-message" label-for="input-1">
                    <b-form-textarea
                      id="input-message"
                      v-model="message"
                      placeholder="Write your message"
                      required
                      rows="3"
                      max-rows="6"
                      class="form-input"
                      name="message"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="primary" class="send-resume-btn-main"
                    >Send cv</b-button
                  >
                  <b-button type="submit" variant="primary" class="send-resume-btn-tablet"
                    >Send cv</b-button
                  >
                </div>

                <!-- terms and use and upload -->
                <div>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="checkBoxStatus"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                    required
                  >
                    I agree to Terms and Privacy
                  </b-form-checkbox>
                </div>

                <div class="upload-file">
                  <attach-file-btn id="attach-file-btn" />

                  <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Attach CV"
                    drop-placeholder="Drop file here..."
                    name="resume"
                  >
                  </b-form-file>
                </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>

      <!-- ---------------------------------------------------- specific job description page ----------------------------------------------------  -->

      <div class="career-page-job-description-page" v-if="backToJobList == false">
        <div
          class="career-page-description-page-return-to-list"
          v-on:click="
            backToJobList = true;
            selectedGameEngineProgrammer = false;
          "
        >
          <arrowLeft style="width: 2vw" />
          Return to Careers
        </div>
        <!-- --------------------------------------------------------- game engine programmer ----------------------------------------------------  -->

        <div v-if="selectedGameEngineProgrammer">
          <h1>Game engine programmer</h1>

          <p class="career-page-description-page-department">Team: Engineering</p>

          <div class="career-page-description-page-description">
            <p class="career-page-description-page-description summary">
              Come help us build the most innovative, interactive and easy to use game
              engine, built with the future in mind, a future where wearable technologies
              take over mouse and keyboard, a future where programs are spoken rather than
              written.
            </p>

            <ul class="career-page-description-page-description bullet-points">
              <b>Roles</b>
              <br />
              <li>Develop and maintain state-of-the-art game engine components.</li>
              <li>Interact and collaborate with other team members.</li>
              <li>Participate in the overall gaming community.</li>
            </ul>

            <ul class="career-page-description-page-description bullet-points">
              <b>Essentials </b>

              <li>3+ years of experience in software development.</li>
              <li>
                Experience in Rust, C/C++; otherwise experience in other system
                programming languages with a willingness to learn.
              </li>
              <li>Ability to write and communicate effectively in English.</li>
              <li>
                Ability and/or experience working remotely as a part of a distributed
                team.
              </li>
              <li>Ability to work proactively with minimal supervision.</li>
              <li>Eagerness to work openly and collaboratively with a diverse team.</li>
              <li>Experience with an AAA game engine such as Unreal Engine or Unity.</li>
              <li>Experience with git and GitHub.</li>
              <li>Nice to have Performance and memory optimization skills.</li>
              <li>Excellent mathematics and/or physics skills.</li>
              <li>
                Experience with combat, physics, animation, and other gameplay systems.
              </li>
              <li>Experience in shipping a successful game or game engine.</li>
              <li>
                Familiarity with major blockchain technologies and technical developments
                in the ecosystem.
              </li>
            </ul>

            <ul class="career-page-description-page-description bullet-points">
              <b>Perks</b>
              <li>Early team tokens allocation + Equity</li>
            </ul>
          </div>
        </div>

        <!-- --------------------------------------------------------- substrate engine programmer ----------------------------------------------------  -->

        <div v-if="selectedSubstractProgrammer">
          <h1>Substrate Engineer</h1>

          <p class="career-page-description-page-department">Team: Engineering</p>

          <div class="career-page-description-page-description">
            <p class="career-page-description-page-description summary">
              We're looking for experienced Rust developers that understand blockchain,
              familiar with the Substrate ecosystem and eager to work on cutting-edge
              research and redesign of the way online games work! <br /><br />

              Come help us develop a substrate PoS sidechain that will be used for
              permanent storage, decentralized database, zkSTARK verifications and lazy
              evaluations of player actions.
            </p>

            <ul class="career-page-description-page-description bullet-points">
              <b>Essentials </b>
              <li>3+ years of experience in software development.</li>
              <li>Experience in Rust</li>
              <li>Ability to write and communicate effectively in English.</li>
              <li>
                Ability and/or experience working remotely as a part of a distributed
                team.
              </li>
              <li>Ability to work proactively with minimal supervision.</li>
              <li>Eagerness to work openly and collaboratively with a diverse team.</li>
              <li>Experience with Substrate and other blockchain ecosystems</li>
              <li>Experience with git and GitHub.</li>
            </ul>

            <ul class="career-page-description-page-description bullet-points">
              <b>Nice to have </b>
              <li>Familiarity with Ethereum and Solidity</li>
              <li>Passionate about decentralization and video games</li>
              <li>Experience in C/C++.</li>
            </ul>

            <ul class="career-page-description-page-description bullet-points">
              <b>Perks</b>
              <li>Early team tokens allocation + Equity</li>
            </ul>
          </div>
        </div>

        <!-- --------------------------------------------------------- marketing intern ----------------------------------------------------  -->

        <div v-if="selectedMarketingIntern">
          <h1>Marketing Intern</h1>

          <p class="career-page-description-page-department">Team: Marketing</p>

          <div class="career-page-description-page-description">
            <p class="career-page-description-page-description summary">
              Fragcolor is looking for a volunteer interested in gaining experience at the
              intersection of blockchain and gaming at this exciting early stage as we
              build the distributed game engine and creation system.
            </p>

            <ul class="career-page-description-page-description bullet-points">
              <b>Roles</b>
              <br />
              <li>Preparing, scheduling and monitoring social media posts</li>
              <li>Organizing community calls and keeping track of announcement dates</li>
              <li>Researching latest industry trends and best practices</li>
              <li>Managing databases and contact lists</li>
              <li>
                Brainstorming and researching ideas for creative campaigns and NFT drops
              </li>
              <li>Other ad hoc activities</li>
            </ul>

            <ul class="career-page-description-page-description bullet-points">
              <b>Nice to have </b>
              <li>Interest in gaming and blockchain</li>
              <li>Familiarity with NFTs or keen to learn</li>
              <li>Experience managing Twitter, Discord and Telegram channels</li>
              <li>Writing skills</li>
            </ul>
          </div>
        </div>
        <!-- =========================================== send resume section, same for all jobs ===========================================  -->

        <div class="career-page-description-page-form" v-if="backToJobList == false">
          <div class="form">
            <newsletterGrid id="career-form-grid-refer" style="position: absolute" />

            <div class="careers-sec-form">
              <b-form
                id="resume-upload-form"
                enctype="multipart/form-data"
                @submit="onSubmit"
              >
                <div class="careers-sec-form refer-friend">
                  <b-button type="submit" variant="primary">Send cv</b-button>

                  <div style="display: inline">
                    <p>Refer a Friend</p>
                  </div>
                </div>
                <div class="careers-sec-form-floatLeft">
                  <b-form-group id="careers-sec-form-firstName" label-for="input-1">
                    <b-form-input
                      id="input-firstname"
                      v-model="firstname"
                      placeholder="First name"
                      required
                      class="form-input"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-lastName" label-for="input-1">
                    <b-form-input
                      id="input-lastname"
                      v-model="lastname"
                      placeholder="Last name"
                      required
                      class="form-input"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-email" label-for="input-1">
                    <b-form-input
                      id="input-email"
                      v-model="email"
                      type="email"
                      placeholder="Email"
                      required
                      class="form-input"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="careers-sec-form-floatRight">
                  <b-form-group id="careers-sec-form-website" label-for="input-1">
                    <b-form-input
                      id="input-website"
                      v-model="websiteLink"
                      placeholder="LinkedIn / Github / Personal website"
                      required
                      class="form-input"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="careers-sec-form-message" label-for="input-1">
                    <b-form-textarea
                      id="input-message"
                      v-model="message"
                      placeholder="Write your message"
                      required
                      rows="3"
                      max-rows="6"
                      class="form-input"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="primary" class="send-resume-btn"
                    >Send cv</b-button
                  >
                </div>

                <!-- terms and use and upload -->
                <div>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="checkBoxStatus"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    I agree to Terms and Privacy
                  </b-form-checkbox>
                </div>

                <div class="upload-file">
                  <attach-file-btn id="attach-file-btn" />

                  <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Attach CV"
                    drop-placeholder="Drop file here..."
                    name="resume"
                  >
                  </b-form-file>
                </div>

                <b-button type="submit" variant="primary" class="send-resume-btn-tablet"
                  >Send cv</b-button
                >
              </b-form>
            </div>
          </div>
        </div>
      </div>

      <description-bottom></description-bottom>
    </div>
  </div>
</template>
