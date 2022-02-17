import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue';
// import Background from require(`../images/background_image.png`);
import landingPageGrid from '../../asset/figmaElements/landingPageGridFading.svg';
import landingPageGridMobile from '../../asset/figmaElements/landing_page_grid_mobile.svg';

import valulePropGrid from '../../asset/figmaElements/value_prop_grid.svg';
import newsletterGrid from '../../asset/figmaElements/newsletter_grid.svg';
import valulePropElement1 from '../../asset/figmaElements/value_prop_element1.svg';
import valulePropElement2 from '../../asset/figmaElements/value_prop_element2.svg';
import valulePropElement3 from '../../asset/figmaElements/value_prop_element3.svg';

import forwardArrow from '../../asset/figmaElements/forward_arrow.svg';
import backwardArrow from '../../asset/figmaElements/backward_arrow.svg';

import quoteSign from '../../asset/figmaElements/quote_sign.svg';
import readMore from '../../asset/figmaElements/read_more_btn.svg';
import readMoreHover from '../../asset/figmaElements/read_more_button_hover.svg';
import showMore from '../../asset/figmaElements/show_more_btn.svg';
import showMoreHover from '../../asset/figmaElements/show_more_hover.svg';


import newsLetterElement1 from '../../asset/figmaElements/newsletter_element1.svg';
import newsLetterElement2 from '../../asset/figmaElements/newsletter_element2.svg';
import newsLetterElement3 from '../../asset/figmaElements/newsletter_element3.svg';

import technologySec from '../Technologies/MainPage';
import teamSec from '../Team/MainPage';


@Component({
  name: 'description-body',
  components: {
    'b-form': BForm,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-button': BButton,
    landingPageGrid,
    valulePropGrid,
    valulePropElement1,
    valulePropElement2,
    valulePropElement3,
    forwardArrow,
    backwardArrow,
    quoteSign,
    readMore,
    readMoreHover,
    showMore,
    newsletterGrid,
    newsLetterElement1,
    newsLetterElement2,
    newsLetterElement3,
    showMoreHover,
    landingPageGridMobile,
    technologySec,
    teamSec
  },
})
export default class DescriptionBody extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';
  public email: string = '';

  public selectedProject1: boolean = true;
  public selectedProject2: boolean = false;

  public projectList: Array<any> = ['ambal', 'pau_infinity_drop'];
  public currentProjIndex: number = 0;

  public quoteList: Array<any> = ['dweb3', 'arkstream', 'animoca', 'lemniscap'];
  public currentQuoteIndex: number = 0;

  public selectedQuote1: boolean = true;
  public selectedQuote2: boolean = false;
  public selectedQuote3: boolean = false;
  public selectedQuote4: boolean = false;


  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }



  public showCorrectProject() {
    let currentProject = this.projectList[this.currentProjIndex];
    if(currentProject == 'ambal') {
      this.selectedProject1 = true;
      this.selectedProject2 = false;
    } else if (currentProject == 'pau_infinity_drop') {
      this.selectedProject1 = false;
      this.selectedProject2 = true;
    }
  }

  public showCorrectQuote() {
    let currentQuote = this.quoteList[this.currentQuoteIndex];

    this.selectedQuote1 = false;
    this.selectedQuote2 = false;
    this.selectedQuote3 = false;
    this.selectedQuote4 = false;

    if(currentQuote == 'dweb3') {
      this.selectedQuote1 = true;
    } else if (currentQuote == 'arkstream') {
      this.selectedQuote2 = true;   
    }else if (currentQuote == 'animoca') {      
      this.selectedQuote3 = true;
    }else if (currentQuote == 'lemniscap') {
      this.selectedQuote4 = true;
    }
  }

  public blogShowMoreBtnMouseOver(){
    var e = document.getElementById('blog-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('blog-sec-show-more-btn');
    if (e){
      e.style.display = 'none';
    }
  }

  public blogShowMoreBtnMouseLeave(){
    var e = document.getElementById('blog-sec-show-more-btn');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('blog-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'none';
    }
  }


  public landingShowMoreBtnMouseOver() {
    var e = document.getElementById('landing-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('landing-sec-show-more-btn');
    if (e){
      e.style.display = 'none';
    }
  }



  public landingShowMoreBtnMouseLeave() {
    var e = document.getElementById('landing-sec-show-more-btn');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('landing-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'none';
    }
  }


  public showMoreBtnMouseOver() {
    var e = document.getElementById('proj-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('proj-sec-show-more-btn');
    if (e){
      e.style.display = 'none';
    }
  }


  public showMoreBtnMouseLeave() {
    var e = document.getElementById('proj-sec-show-more-btn');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('proj-sec-show-more-btn-hover');
    if (e){
      e.style.display = 'none';
    }
  }



// ===================== proj mouse over func =======================================

  public projForwardMouseOver() {
    var e = document.getElementById('homepage-proj-sec-forward-arrow-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('homepage-proj-sec-forward-arrow-original');
    if (e){
      e.style.display = 'none';
    }
  }

  public projForwardMouseLeave(){
    var e = document.getElementById('homepage-proj-sec-forward-arrow-hover');
    if (e){
      e.style.display = 'none';
    }
    var e = document.getElementById('homepage-proj-sec-forward-arrow-original');
    if (e){
      e.style.display = 'inline';
    }
  }

   public projBackwardMouseOver() {
    var e = document.getElementById('homepage-proj-sec-backward-arrow-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('homepage-proj-sec-backward-arrow-original');
    if (e){
      e.style.display = 'none';
    }
  }

  public projBackwardMouseLeave(){
    var e = document.getElementById('homepage-proj-sec-backward-arrow-hover');
    if (e){
      e.style.display = 'none';
    }
    var e = document.getElementById('homepage-proj-sec-backward-arrow-original');
    if (e){
      e.style.display = 'inline';
    }
  }






// ===================== quote mouse over func =======================================

  public forwardMouseOver() {
    var e = document.getElementById('homepage-quote-sec-forward-arrow-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('homepage-quote-sec-forward-arrow-original');
    if (e){
      e.style.display = 'none';
    }
  }


  public forwardMouseLeave(){
    var e = document.getElementById('homepage-quote-sec-forward-arrow-hover');
    if (e){
      e.style.display = 'none';
    }
    var e = document.getElementById('homepage-quote-sec-forward-arrow-original');
    if (e){
      e.style.display = 'inline';
    }
  }

   public backwardMouseOver() {
    var e = document.getElementById('homepage-quote-sec-backward-arrow-hover');
    if (e){
      e.style.display = 'inline';
    }

    var e = document.getElementById('homepage-quote-sec-backward-arrow-original');
    if (e){
      e.style.display = 'none';
    }
  }

  public backwardMouseLeave(){
    var e = document.getElementById('homepage-quote-sec-backward-arrow-hover');
    if (e){
      e.style.display = 'none';
    }
    var e = document.getElementById('homepage-quote-sec-backward-arrow-original');
    if (e){
      e.style.display = 'inline';
    }
  }

  public onSubmit() {

  }

  public prevProject(): void {
    if(this.currentProjIndex==0){
      this.currentProjIndex = 1;
    } else if(this.currentProjIndex==1){
      this.currentProjIndex = 0;
    }

    this.showCorrectProject();
  }

  public nextProject(): void {
    if(this.currentProjIndex==0){
      this.currentProjIndex = 1;
    } else if(this.currentProjIndex==1){
      this.currentProjIndex = 0;
    }

    this.showCorrectProject();
  }


  public prevQuote(): void {
    if(this.currentQuoteIndex==0){
      this.currentQuoteIndex = 3;
    } else {
      this.currentQuoteIndex--;
    }

    this.showCorrectQuote();
  }

  public nextQuote(): void {
    if(this.currentQuoteIndex==3){
      this.currentQuoteIndex = 0;
    } else {
      this.currentQuoteIndex++;
    }

    this.showCorrectQuote();
  }

}
