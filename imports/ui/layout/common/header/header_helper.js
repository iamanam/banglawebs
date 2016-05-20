import "./header_head.html";
import "./header_main.html";
import "./header_footer.html";
import "./header.html";

if (Meteor.isClient) {
  Template.header_head.rendered = function() {
        // intilizing the external plugin okayNav
    let navigation = $('#nav-main').okayNav();
  };
  Template.header_store.rendered = function() {
        // intilizing the external plugin okayNav
    let navigation = $('#nav-main').okayNav();
  };

  Template.header_head.events({
    "click #js-berger-menu": function(e) {
      e.preventDefault();
      $(e.currentTarget).toggleClass('open');
    }
  });
}
