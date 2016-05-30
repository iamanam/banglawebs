const fastrackRoutes = FlowRouter.group({
    name: "fastrack",
    prefix: "/fastrack"
});

fastrackRoutes.route("/", {
    action: () => {
        require("/imports/ui/pages/fastrack/user/products");
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_pro",
            footer: "footer"
        });
    }
});
fastrackRoutes.route("/order/:productCode", {
    action: () => {
        require("/imports/ui/pages/fastrack/user/order");
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_order",
            footer: "footer"
        });
    }
});
/*
 Routes for fastrack admin groups
 */


fastrackRoutes.route("/admin", {
    action: () => {
        require("/imports/ui/pages/fastrack/admin.js");
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrack_admin",
            footer: "footer"
        });
    }
});
