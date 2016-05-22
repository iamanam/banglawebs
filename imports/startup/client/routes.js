import "../../ui/layout/appLayout";
import "./fastrack_routes";

if (Meteor.isClient) {
  FlowRouter.route("/", {
    action: function() {
      require("/imports/ui/pages/home/home.js");
      BlazeLayout.render("applayout", {
        top: "header",
        main: "home",
        footer: "footer"
      });
    }
  });
  FlowRouter.route("/guide", {
    action: function() {
      require("/imports/ui/pages/guide/guide.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "guide",
        footer: "footer"
      });
    }
  });
  FlowRouter.route("/products", {
    action: function() {
      require("/imports/ui/pages/products/products.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "products",
        footer: "footer"
      });
    }
  });



  FlowRouter.route("/design", {
    action: function() {
      require("/imports/ui/pages/design/design.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "design",
        footer: "footer"
      });
    }
  });

  FlowRouter.route("/hosting", {
    action: function() {
      require("/imports/ui/pages/hosting/hosting.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "hosting",
        footer: "footer"
      });
    }
  });

  FlowRouter.route("/ecommerce", {
    action: function() {
      require("/imports/ui/pages/e-commerce/e-commerce.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "ecommerce",
        footer: "footer"
      });
    }
  });
  FlowRouter.route("/tutorial", {
    action: function() {
      require("/imports/ui/pages/tutorial/tutorial.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "tutorial",
        footer: "footer"
      });
    }
  });
  FlowRouter.route("/contact", {
    action: function() {
      require("/imports/ui/pages/contact/contact.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "contact",
        footer: "footer"
      });
    }
  });
  FlowRouter.route("/seo", {
    action: function() {
      require("/imports/ui/pages/seo/seo.js");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "seo",
        footer: "footer",
        contact_service_end: "contact_service_end"
      });
    }
  });
  FlowRouter.route("/*", {
    action: function() {
      require("/imports/ui/layout/common/notFound.html");
      BlazeLayout.render("applayout", {
        top: "headerwithmain",
        main: "not_found",
        footer: "footer"
      });
    }
  });
}


/**
 */
