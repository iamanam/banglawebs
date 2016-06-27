import "./order.html";

Template.fastrackbd_order.onCreated(function() {
    this.productCode = () => FlowRouter.getParam("productCode");
    check(this.productCode(), String);
    this.autorun(() => {
        this.subscribe("findOne", this.productCode());
    });
});

Template.fastrackbd_order.helpers({
    "thisProduct": () => {
        return Products.findOne({
            _id: Template.instance().productCode()
        });
    }
});
Template.fastrackbd_order.events({
    "click [data-social-login]": (event) => {
        event.preventDefault();
        const service = event.currentTarget.getAttribute("data-social-login"),
            options = {
                requestPermissions: ["email"]
            };
        if (service === "loginWithTwitter") {
            delete options.requestPermissions;
        }
        Meteor[service](options, function(err) {
            if (err)
                Session.set("errorMessage", err.reason || "Unknown error");
        });
    }
});


AutoForm.hooks({
    "insertOrder": {
        onSubmit: function(insertDoc) {
            this.event.preventDefault();
            if (!Meteor.userId())
                throw new Meteor.Error(501, "Unauthrized action");
            const self = this;
            insertDoc.productOrdered = FlowRouter.getParam("productCode");
            insertDoc.userOrdered = Meteor.userId();
            const ngpattern = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
            const isValidNumber = ngpattern.test(insertDoc.mobile);
            if (isValidNumber) {
                check(insertDoc, orderSchema);
                return Meteor.call("saveOrder", insertDoc, function(error, result) {
                    if (error)
                        throw new Meteor.Error(error);
                    self.done(null, result);
                });
            }
            throw new Meteor.Error(401, "Number isn't valid");
        },
        onSuccess: function(formType, result) {
            $(".order-status h5").html("Order posted successfully : Order ref no-" + result);
        }
    }
});
