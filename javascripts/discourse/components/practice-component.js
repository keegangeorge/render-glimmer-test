import Component from "@glimmer/component";

export default class PracticeComponent extends Component {
  get bannerLinks() {
    return JSON.parse(settings.banner_links);
  }
}
