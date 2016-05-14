"use strict";

import "./header_head.html";
import "./header_main.html";
import "./header_footer.html";
import "./header.html";

if (Meteor.isClient) {
    Template.header_head.rendered = function () {
        //intilizing the external plugin okayNav
        var navigation = $('#nav-main').okayNav();
    };
    Template.header_head.events({
        "click #js-berger-menu": function (e, t) {
            e.preventDefault();
            console.log(e);
            $(e.currentTarget).toggleClass('open');
        }
    })

}
