if (Meteor.isClient) {
    Template.loginButtons.rendered=() => {
        if(Meteor.userId()){
            x=$("#login-buttons");
            console.log(this,$("#login-buttons"));
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
