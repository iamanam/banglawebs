if (Meteor.isClient) {
    Template.header_head.events({
        "click #js-berger-menu": function(e) {
            e.preventDefault();
            $(e.currentTarget).toggleClass("open");
        }
    });

}
