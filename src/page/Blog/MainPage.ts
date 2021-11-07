import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

@Component({
  name: 'mainpage',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar
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
