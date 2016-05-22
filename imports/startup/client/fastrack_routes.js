FlowRouter.route("/fastrackbd/order/:id", {
    action: function(pram, queryParam) {
        require("/imports/ui/pages/fastrack/user/order.js");
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_order",
            footer: "footer"
        });
    }
});

FlowRouter.route("/fastrackbd", {
    action: function() {
        require("/imports/ui/pages/fastrack/user/products.js");
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_pro",
            footer: "footer"
        });
    }
});
/*
 Routes for fastrack admin groups
 */
let adminRoutes = FlowRouter.group({
    prefix: "/admin",
    name: "admin"
});

adminRoutes.route("/fastrack", {
    action: () => {
        require("/imports/ui/pages/fastrack/admin.js");
        if (Meteor.isDevelopment || Meteor.userId()) {
            BlazeLayout.render("applayout", {
                top: "header_store",
                main: "fastrack_admin",
                footer: "footer"
            });
        }
    }
});