import "./header_head.html";
import "./header_main.html";
import "./header_footer.html";
import "./header.html";

if (Meteor.isClient) {
    Template.loginButtons.rendered=() => {
        if(Meteor.userId()){
            x=$("#login-buttons");
            Meteor.setTimeOut(()=>{
                x.html("<div class='login-link-and-dropdown-list fa fa-user'><a class='#'></a></div>");
            },2000);
            console.log(this,$("#login-buttons"),x.children());

        }
    };
    Template.header_head.rendered = function() {
        // intilizing the external plugin okayNav
        let navigation = $("#nav-main").okayNav();

    };
    Template.header_store.rendered = function() {
        // intilizing the external plugin okayNav
        let navigation = $("#nav-main").okayNav();
    };

    Template.header_head.events({
        "click #js-berger-menu": function(e) {
            e.preventDefault();
            $(e.currentTarget).toggleClass("open");
        }
    });
}
