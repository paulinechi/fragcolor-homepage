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

import { BForm, BFormGroup, BFormInput, BButton, BFormFile, BFormCheckbox, BFormTextarea } from 'bootstrap-vue';

import * as $ from 'jquery';

import emailjs from 'emailjs-com';
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
    careersProp1,
    careersProp2,
    careersProp3,
    careersProp4,
    arrow,
    arrowLeft
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
  public file2: any = null;

  public backToJobList: boolean = true;
  public selectedGameEngineProgrammer: boolean = false;
  public selectedSubstractProgrammer: boolean = false;
  public selectedMarketingIntern: boolean = false;




  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.file1);
    console.log(document.forms);
    
      // emailjs.send('service_qqlrujg', 'template_shwlbab', {
      //       firstname: this.firstname,
      //       lastname: this.lastname,
      //       email: this.email,
      //       websiteLink: this.websiteLink,
      //       message: this.message,
      //       attachement: this.file1,
      //       attachement2: this.file2,
      //     }, 'user_FTv1dMUAhrODFjE1GRm9V');

// document.getElementById('contact-form')

      emailjs.sendForm('service_qqlrujg', 'template_shwlbab', document.forms[0])
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });


    // emailjs.sendForm('service_qqlrujg', 'template_shwlbab', {
    //   firstname: this.firstname,
    //   email: this.email,
    //   message: this.message
    // }, 'user_FTv1dMUAhrODFjE1GRm9V')



    // var data = {
    //   service_id: 'service_qqlrujg',
    //   template_id: 'template_shwlbab',
    //   user_id: 'user_FTv1dMUAhrODFjE1GRm9V',
    //   template_params: {
          // 'firstname': this.firstname,
          // 'lastname': this.lastname,
          // 'email': this.email,
          // 'websiteLink': this.websiteLink,
          // 'message': this.message,
          // 'attachement': this.file1,
          // 'attachement2': this.file2
    //   }
    // };
   
    // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    //     type: 'POST',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json'
    // }).done(function() {
    //     alert('Your mail is sent!');
    // }).fail(function(error) {
    //     alert('Oops... ' + JSON.stringify(error));
    // });

  }
}
