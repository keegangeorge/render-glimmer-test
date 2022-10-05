import { createWidget } from "discourse/widgets/widget";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

createWidget("practice-widget", {
  tagName: "li.custom-addition",

  html() {
    return [
      new RenderGlimmer(
        this,
        "div.custom-addition-items",
        hbs`<PracticeComponent/>`
      ),
    ];
  },
});
