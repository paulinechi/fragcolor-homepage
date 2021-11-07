import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from './HeaderSection';
import DescriptionBody from './DescriptionBody';
import DescriptionBottom from './DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

@Component({
  name: 'homepage',
  components: {
    'nft-header': Header,
    'description-body': DescriptionBody,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar
  },
})
export default class HomePage extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }
}
