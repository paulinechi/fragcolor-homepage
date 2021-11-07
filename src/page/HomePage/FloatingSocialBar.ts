import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import twitter from '../../asset/figmaElements/twitter_blue.svg';
import discord from '../../asset/figmaElements/discord_blue.svg';
import telegram from '../../asset/figmaElements/telegram_blue.svg';


@Component({
  name: 'mainpage',
  components: {
    twitter,
    discord,
    telegram
  },
})
export default class MainPage extends Vue {
}
