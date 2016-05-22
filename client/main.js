import "../imports/startup/client";
import "../imports/api/client/index";

Blaze.registerHelper("size",()=>{
    return window.innerWidth <=400;
});
