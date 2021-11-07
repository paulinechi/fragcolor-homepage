import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

import projectElement1 from '../../asset/figmaElements/projects_elements.svg';
import projectElement2 from '../../asset/figmaElements/projects_element2.svg';
import projectElement3 from '../../asset/figmaElements/projects_elements3.svg';
import projectElement4 from '../../asset/figmaElements/projects_elements4.svg';


@Component({
  name: 'mainpage',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar,
    projectElement1,
    projectElement2,
    projectElement3,
    projectElement4
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
