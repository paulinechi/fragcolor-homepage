import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { BForm, BFormGroup, BFormInput, BButton, BModal, VBModal } from 'bootstrap-vue';

import sendEmail from '../../asset/figmaElements/popup_send_email_btn.svg';
import popupGrid from '../../asset/figmaElements/popup_grid.svg';
import close from '../../asset/figmaElements/Close.svg';
import fragmentsLogo from '../../asset/figmaElements/fragments_logo_horizontal.svg';
import threeLineMenu from '../../asset/figmaElements/three_line_menu.svg';


import twitter from '../../asset/figmaElements/twitter.svg';
import discord from '../../asset/figmaElements/discord.svg';
import telegram from '../../asset/figmaElements/telegram.svg';
import medium from '../../asset/figmaElements/medium.svg';
import linkedIn from '../../asset/figmaElements/linkedin.svg';
import github from '../../asset/figmaElements/github.svg';
import angelList from '../../asset/figmaElements/AngelList_logo.svg';
import opensea from '../../asset/figmaElements/opensea.svg';

import headerLogo from '../../asset/figmaElements/fragcolor_logo_color_white.svg';


@Component({
  name: 'nft-shop-header',
  components: {
    'b-form': BForm,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-button': BButton,
    'b-modal': BModal,
    sendEmail,
    popupGrid,
    close,
    fragmentsLogo,
    threeLineMenu,
    twitter,
    discord,
    telegram,
    medium,
    linkedIn,
    github,
    angelList,
    opensea,
    headerLogo
  },
  directives: {
    'b-modal': VBModal,
  }
})
export default class HeaderSection extends Vue {
  public allowPopup: boolean = false;
  public email: string = '';

  public selectedHome: boolean = true;
  public selectedAbout: boolean = false;
  public selectedTech: boolean = false;
  public secltedAbout: boolean = false;
  public selectedProj: boolean = false;
  public selectedBlog: boolean = false;
  public selectedCareer: boolean = false;
  public selectedDocumentation: boolean = false;

  public showDropDownMenu: boolean = false;


  public showPopupWindow(): void {
    this.allowPopup = true;
    // var containerElement = document.getElementsByClassName('body');
    // containerElement.Add
  }

  public closePopupWindow(): void {
    this.allowPopup = false;
  }

  public onSubmit(): void {

  }

  public resetMenuTabColor(): void {
    // set all to false first, then set the selected one to true
    this.selectedHome = false;
    this.selectedAbout = false;
    this.selectedTech = false;
    this.selectedAbout = false;
    this.selectedProj = false;
    this.selectedBlog = false;
    this.selectedCareer = false;
    this.selectedDocumentation = false;
  }

  public created() {
    this.resetMenuTabColor();

    if (window.location.href.indexOf("about") > -1) {
      this.selectedAbout = true;
    } else if (window.location.href.indexOf("technology") > -1) {
      this.selectedTech = true;
    } else if (window.location.href.indexOf("projects") > -1) {
      this.selectedProj = true;
    } else if (window.location.href.indexOf("blog") > -1) {
      this.selectedBlog = true;
    }else if (window.location.href.indexOf("careers") > -1) {
      this.selectedCareer = true;
    }else {
      this.selectedHome = true
    }
  }

  public showHideDropDownMenu(): void {
    this.showDropDownMenu = !this.showDropDownMenu;
  }


}
