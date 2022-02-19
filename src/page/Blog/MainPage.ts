import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';
// import Blog from './BlogType.js';


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

  public blogs: Array<Blog> = [
    {
      date: '18 November',
      title: 'Introducing Ambal Duels: The Tournament Goes Digital',
      description: 'Following the success of Ambal Tournament strategy card game, a physical game funded on Kickstarter earlier this year and praised for its innovative gameplay and unique art style, Fragcolor is now bringing the Ambal experience to the digital realm under Ambal Duels.',
      author: 'By @BernBitt',
      img: require(`../../asset/figmaElements/medium_blog5.png`),
      linkToMedium: 'https://medium.com/@fragcolor/introducing-ambal-duels-the-tournament-goes-digital-45ee4f4b8f4f'
    },
    {
      date: '10 November',
      title: 'User-generated Content: Mods and Game Creation Systems',
      author: 'By @BernBitt',
      img: require(`../../asset/figmaElements/medium_blog4.jpeg`),
      linkToMedium: 'https://medium.com/@fragcolor/user-generated-content-mods-and-game-creation-systems-557d2b94b452'
    },
    {
      date: '30 October',
      title: 'Why Gaming Feels Good.',
      author: 'By @BernBitt',
      img: require(`../../asset/figmaElements/medium_blog3.jpg`),
      linkToMedium: 'https://medium.com/@fragcolor/why-gaming-feels-good-75ac50491185'
    },
    {
      date: '28 September',
      title: 'Create to Earn Economy and the Bottom-up Fragment Model',
      author: 'By @voidtarget and @aljaparis',
      img: require(`../../asset/image/fragcolor_blog2.png`),
      linkToMedium: 'https://medium.com/@fragcolor/create-to-earn-economy-and-the-bottom-up-fragment-model-94c5fe7b1232'
    },
    {
      date: '12 August',
      title: 'Fragcolor: Building the Decentralized Gaming Engine for the Open Metaverse',
      description: 'Massively Multiplayer Online games (MMO) have allowed users worldwide to connect deeper by developing shared emotional experiences. The effect this interconnectedness has on the formation of micro-communities is unprecedented.',
      author: 'By @voidtarget and @aljaparis',
      img: require(`../../asset/image/fragcolor_background.png`),
      linkToMedium: 'https://medium.com/@fragcolor/fragcolor-building-the-decentralized-gaming-engine-for-the-open-metaverse-25215b28584e'
    },
  ];

  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }
}
