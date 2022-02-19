import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

import projectElement1 from '../../asset/figmaElements/projects_elements.svg';
import projectElement2 from '../../asset/figmaElements/projects_element2.svg';
import projectElement3 from '../../asset/figmaElements/projects_elements3.svg';
import projectElement4 from '../../asset/figmaElements/projects_elements4.svg';

import twitter from '../../asset/figmaElements/twitter_team.svg';
import linkedIn from '../../asset/figmaElements/linkedin_team.svg';

import investor1 from '../../asset/figmaElements/3.svg';
import investor2 from '../../asset/figmaElements/sfermion.svg';
import investor3 from '../../asset/figmaElements/5.svg';
import investor4 from '../../asset/figmaElements/8.svg';
import investor5 from '../../asset/figmaElements/9.svg';
import investor6 from '../../asset/figmaElements/lemniscap_logo_black 1.svg';
import investor7 from '../../asset/figmaElements/Group.svg';
import m6 from '../../asset/figmaElements/M6_White.svg';


import landingPageGrid from '../../asset/figmaElements/landingPageGridFading.svg';

@Component({
  name: 'mainpage',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar,
    projectElement1,
    projectElement2,
    projectElement3,
    projectElement4,
    twitter,
    linkedIn,
    investor1,
    investor2,
    investor3,
    investor4,
    investor5,
    investor6,
    investor7,
    landingPageGrid,
    m6
  },
})
export default class MainPage extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }
}


