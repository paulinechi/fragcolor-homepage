import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Header from '../HomePage/HeaderSection';
import DescriptionBottom from '../HomePage/DescriptionBottom';
import SocialBar from '../HomePage/FloatingSocialBar';

import projectElement1 from '../../asset/figmaElements/projects_elements.svg';
import projectElement2 from '../../asset/figmaElements/projects_element2.svg';
import projectElement3 from '../../asset/figmaElements/projects_elements3.svg';
import projectElement4 from '../../asset/figmaElements/projects_elements4.svg';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';




import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})

// const puppeteer = require('puppeteer');



@Component({
  name: 'pressRelease',
  components: {
    'global-header': Header,
    'description-bottom': DescriptionBottom,
    'social-bar': SocialBar,
    projectElement1,
    projectElement2,
    projectElement3,
    projectElement4
  },
  metaInfo: {
    meta: [
      // { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Fragments foundation raises to expand Fragcolor", id: "title-press" },
      { property: "og:description", content: "The round was led by Animoca Brands with participation by Outlier Ventures, Sfermion, Lemniscap...", id: "desc-press" },
      {
            'property': 'og:title',
            'content': 'Fragments foundation raises to expand Fragcolor',
            'vmid': 'og:title'
      },
      {
            'property': 'og:description',
            'content': 'The round was led by Animoca Brands with participation by Outlier Ventures, Sfermion, Lemniscap...',
            'vmid': 'og:description'
      }
    ]
  }
})
export default class MainPage extends Vue {
  public headerMenuDropDown: boolean = false;
  public descriptionMenuDropDown: boolean = false;

  public test: boolean = false;
  public selectedTab: string = 'Details';

  public async created() {
    const descEl = document.querySelector('head meta[property="og:description"]');
    const titleEl = document.querySelector('head meta[property="og:title"]');
   
    if (descEl) {
      descEl.setAttribute('content', 'The round was led by Animoca Brands with participation by Outlier Ventures, Sfermion, Lemniscap...');
    }

    if (titleEl) {
      titleEl.setAttribute('content', 'Fragments foundation raises to expand Fragcolor');
    }

  }



  public changeTab(newTab: string): void {
    this.selectedTab = newTab;
  }

  public async downloadLogos(e: any): Promise<any> {

    // ======================================== works -- download individual files ======================
    // var filesForDownload: any = [
    //   {
    //     path: require("../../asset/figmaElements/press_fragcolor_logo1_black.png"),
    //     name: "press_fragcolor_logo1_black.png"
    //   },
    //   {
    //     path: require("../../asset/figmaElements/press_fragcolor_logo1_color_black.png"),
    //     name: "press_fragcolor_logo1_color_black.png"
    //   },
    //   {
    //     path: require("../../asset/figmaElements/press_fragcolor_logo1_color_white.png"),
    //     name: "press_fragcolor_logo1_color_white.png"
    //   },
    //   {
    //     path: require("../../asset/figmaElements/press_fragcolor_logo1_white.png"),
    //     name: "press_fragcolor_logo1_white.png"
    //   }
    // ];

    // e.preventDefault();

    // var temporaryDownloadLink = document.createElement("a");
    // temporaryDownloadLink.style.display = 'none';

    // document.body.appendChild(temporaryDownloadLink);

    // for (var n = 0; n < filesForDownload.length; n++) {
    //    var download = filesForDownload[n];
    //    temporaryDownloadLink.setAttribute('href', download.path);
    //    temporaryDownloadLink.setAttribute('download', download.name);

    //    temporaryDownloadLink.click();
    // }

    // document.body.removeChild(temporaryDownloadLink);
    // ===============================================================================================

 
    const imageBlob = await fetch('https://fragcolor.com/press_fragcolor_logo1_black.png').then(response => response.blob());
    const imageBlob2 = await fetch('https://fragcolor.com/press_fragcolor_logo1_color_black.png').then(response => response.blob());
    const imageBlob3 = await fetch('https://fragcolor.com/press_fragcolor_logo1_color_white.png').then(response => response.blob());
    const imageBlob4 = await fetch('https://fragcolor.com/press_fragcolor_logo1_white.png').then(response => response.blob());

    const imgData = new File([imageBlob], 'filename.jpg');
    const imgData2 = new File([imageBlob2], 'filename2.jpg');
    const imgData3 = new File([imageBlob3], 'filename3.jpg');
    const imgData4 = new File([imageBlob4], 'filename4.jpg');


    var zip = new JSZip();

    var img = zip.folder('logos');

    if (img) {
      img.file('press_fragcolor_logo_black.png', imgData, { base64: true });
      img.file('press_fragcolor_logo_color_black.png', imgData2, { base64: true });
      img.file('press_fragcolor_logo_color_white.png', imgData3, { base64: true });
      img.file('press_fragcolor_logo_white.png', imgData4, { base64: true });
    }

    zip.generateAsync({
      type: "blob",
    }).then(function (blob) { // 1) generate the zip file
      saveAs(blob, "Fragcolor_logos.zip");                          // 2) trigger the download
    }, function (err) {
      jQuery("#download-logo-btn").text(err);
    });

  }
}
