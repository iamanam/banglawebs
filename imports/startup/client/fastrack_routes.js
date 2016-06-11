import "/imports/ui/pages/fastrack/user/user_fastrack.js";
const fastrackRoutes = FlowRouter.group({
    name: "fastrack",
    prefix: "/fastrack"
});

fastrackRoutes.route("/", {
    action: () => {
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_pro",
            footer: "footer"
        });
    }
});
fastrackRoutes.route("/order/:productCode", {
    action: () => {
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "fastrackbd_order",
            footer: "footer"
        });
    }
});
fastrackRoutes.route("/view_order", {
    action: () => {
        BlazeLayout.render("applayout", {
            top: "header_store",
            main: "order_view",
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
