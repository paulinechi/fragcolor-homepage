import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

import careersProp1 from '../../asset/figmaElements/careers1.svg';
import careersProp2 from '../../asset/figmaElements/careers2.svg';
import careersProp3 from '../../asset/figmaElements/careers3.svg';
import careersProp4 from '../../asset/figmaElements/careers4.svg';
import arrow from '../../asset/figmaElements/arrow.svg';
import arrowLeft from '../../asset/figmaElements/arrow_left.svg';
import newsletterGrid from '../../asset/figmaElements/newsletter_grid.svg';

import popupGrid from '../../asset/figmaElements/popup_grid.svg';
import close from '../../asset/figmaElements/Close.svg';

import attachFileBtn from '../../asset/figmaElements/attach_file_btn.svg';
import cvSentFailed from '../../asset/figmaElements/cv_sent_failed.svg';
import cvSentSuccessfully from '../../asset/figmaElements/cv_sent_successfully.svg';
import cvGotItBtn from '../../asset/figmaElements/cv_got_it.svg';
import cvTryAgainBtn from '../../asset/figmaElements/cv_try_again.svg';

import { BForm, BFormGroup, BFormInput, BButton, BFormFile, BFormCheckbox, BFormTextarea } from 'bootstrap-vue';

import * as $ from 'jquery';

import emailjs from 'emailjs-com';
import axios from 'axios';
emailjs.init("user_FTv1dMUAhrODFjE1GRm9V"); // user_id from emailJs

@Component({
  name: 'mainpage',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar,
    'b-form': BForm,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-button': BButton,
    'b-form-file': BFormFile,
    'b-form-checkbox': BFormCheckbox,
    'b-form-textarea': BFormTextarea,
    'attach-file-btn': attachFileBtn,
    careersProp1,
    careersProp2,
    careersProp3,
    careersProp4,
    arrow,
    arrowLeft,
    popupGrid,
    close,
    cvSentSuccessfully,
    cvSentFailed,
    cvGotItBtn,
    cvTryAgainBtn,
    newsletterGrid

  },
})
export default class MainPage extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public email: string = '';
  public firstname: string = '';
  public lastname: string = '';
  public websiteLink: string = '';
  public message: string = '';
  public checkBoxStatus: string = '';
  public file1: any = null;

  public backToJobList: boolean = true;
  public selectedGameEngineProgrammer: boolean = false;
  public selectedSubstractProgrammer: boolean = false;
  public selectedMarketingIntern: boolean = false;

  public submitSuccessful: boolean = false;
  public submitFailed: boolean = false;
  public allowPopup: boolean = false;

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.file1);

    emailjs.sendForm('service_qqlrujg', 'template_shwlbab', '#resume-form',
      'user_FTv1dMUAhrODFjE1GRm9V')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.submitSuccessful = true;
        this.allowPopup = true;
      }, (error) => {
        console.log('FAILED...', error);
        this.submitFailed = true;
        this.allowPopup = true;
      });
    ;

    


    // axios({
    //   method: "post",
    //   url: "https://localhost:8081/email",
    //   data: bodyFormData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then(function (response: any) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response: any) {
    //     //handle error
    //     console.log(response);
    //   });
  }


  public closePopupWindow(): void {
    this.allowPopup = false;

    // clear the form
    this.email = '';
    this.firstname = '';
    this.lastname = '';
    this.websiteLink = '';
    this.message = '';
    this.checkBoxStatus = '';
    this.file1 = null;
  }
}
