import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  api.decorateWidget("header-icons:before", (helper) => {
    return helper.widget.attach("practice-widget");
  });
});
