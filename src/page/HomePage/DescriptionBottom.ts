import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import logoBlackWhite from '../../asset/figmaElements/logo_black_white.svg';

import twitter from '../../asset/figmaElements/twitter.svg';
import discord from '../../asset/figmaElements/discord.svg';
import telegram from '../../asset/figmaElements/telegram.svg';
import medium from '../../asset/figmaElements/medium.svg';
import linkedIn from '../../asset/figmaElements/linkedin.svg';
import github from '../../asset/figmaElements/github.svg';
import angelList from '../../asset/figmaElements/AngelList_logo.svg';
import opensea from '../../asset/figmaElements/opensea.svg';

@Component({
  name: 'description-bottom',
  components: {
    logoBlackWhite,
    twitter,
    discord,
    telegram,
    medium,
    linkedIn,
    github,
    angelList,
    opensea
  },
})
export default class DescriptionBottom extends Vue {}
