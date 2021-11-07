import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue';
// import Background from require(`../images/background_image.png`);
import landingPageGrid from '../../asset/figmaElements/landingPageGridFading.svg';
import valulePropGrid from '../../asset/figmaElements/value_prop_grid.svg';
import newsletterGrid from '../../asset/figmaElements/newsletter_grid.svg';
import valulePropElement1 from '../../asset/figmaElements/value_prop_element1.svg';
import valulePropElement2 from '../../asset/figmaElements/value_prop_element2.svg';
import valulePropElement3 from '../../asset/figmaElements/value_prop_element3.svg';

import forwardArrow from '../../asset/figmaElements/forward_arrow.svg';
import backwardArrow from '../../asset/figmaElements/backward_arrow.svg';

import quoteSign from '../../asset/figmaElements/quote_sign.svg';
import readMore from '../../asset/figmaElements/read_more_btn.svg';
import showMore from '../../asset/figmaElements/show_more_btn.svg';


import newsLetterElement1 from '../../asset/figmaElements/newsletter_element1.svg';
import newsLetterElement2 from '../../asset/figmaElements/newsletter_element2.svg';
import newsLetterElement3 from '../../asset/figmaElements/newsletter_element3.svg';



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
    showMore,
    newsletterGrid,
    newsLetterElement1,
    newsLetterElement2,
    newsLetterElement3
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

  public quoteList: Array<any> = ['dweb3', 'arkstream'];
  public currentQuoteIndex: number = 0;

  public selectedQuote1: boolean = true;
  public selectedQuote2: boolean = false;


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
    if(currentQuote == 'arkstream') {
      this.selectedQuote1 = true;
      this.selectedQuote2 = false;
    } else if (currentQuote == 'dweb3') {
      this.selectedQuote1 = false;
      this.selectedQuote2 = true;
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
      this.currentQuoteIndex = 1;
    } else if(this.currentQuoteIndex==1){
      this.currentQuoteIndex = 0;
    }

    this.showCorrectQuote();
  }

  public nextQuote(): void {
    if(this.currentQuoteIndex==0){
      this.currentQuoteIndex = 1;
    } else if(this.currentQuoteIndex==1){
      this.currentQuoteIndex = 0;
    }

    this.showCorrectQuote();
  }


}
