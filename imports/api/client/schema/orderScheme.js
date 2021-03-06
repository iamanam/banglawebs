/**
 * Created by iaman on 5/17/2016.
 */

Order = new Mongo.Collection("order_watch");


orderSchema = new SimpleSchema({
    mobile: {
        type: String,
        label: "Put your mobile number",
        min: 11,
        regEx: /^(?:\+88|01)?(?:\d{11}|\d{13})$/
    },
    userOrdered: {
        type: "String",
        autoValue: () => {
            return Meteor.userId();
        }
    },
    productOrdered: {
        type: "String",
        autoValue: () => {
            return FlowRouter.getParam("productCode");
        }
    },
    OrderType: {
        type: String,
        allowedValues: ["Order", "Pre-order"]
    },
    bkash: {
        type: "Number",
        label: "bkash wallet number (optional)",
        min: 11,
        optional: true
    },
    choose: {
        type: String,
        allowedValues: [
            "yes"
        ],
        label: "Do you agree with our terms and regulations ??"
    }
});

Order.attachSchema(orderSchema);
