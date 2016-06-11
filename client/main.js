import "../imports/api/client/index";
import "../imports/startup/client";

Blaze.registerHelper("size", () => {
    return window.innerWidth <= 450;
});
