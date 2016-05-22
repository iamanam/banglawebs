import "./common/index.js";
import "../component/index.js";
import "./applayout.html";

Template.applayout.rendered = function() {
    $("#menu").mmenu({});
    $("#mm-blocker").click(function() {
        if ($("#js-berger-menu").hasClass("open")) {
            $("#js-berger-menu").trigger("click");
        }
    });
};
