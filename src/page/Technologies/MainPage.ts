import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import SocialBar from '../HomePage/FloatingSocialBar';

import DescriptionBottom from '../HomePage/DescriptionBottom';
import githubBtn from '../../asset/figmaElements/github-button.svg';
import githubGreenBtn from '../../asset/figmaElements/github_green_btn.svg';
import githubBlueBtn from '../../asset/figmaElements/github_blue_btn.svg';

import chainblocksCube from '../../asset/figmaElements/Group_47597.svg';
import hastenLines from '../../asset/figmaElements/tech_hasten_element.svg';

@Component({
  name: 'mainpage',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar,
    githubBtn,
    githubGreenBtn,
    githubBlueBtn,
    chainblocksCube,
    hastenLines
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
