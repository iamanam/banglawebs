import "./common/footer/footer.html";
import "./common/header/header_helper.js";
import "../component/component.html";
import "../component/mmenu.html";

import "./applayout.html";

Template.applayout.rendered = function () {
    "use strict";
    $("#menu").mmenu({});
    $("#mm-blocker").click(function () {
        if ($("#js-berger-menu").hasClass("open")) {
            $("#js-berger-menu").trigger("click")
        }
    })
};

