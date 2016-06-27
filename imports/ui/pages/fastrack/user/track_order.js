import "./trackOrder.html";

Template.track_order.onCreated(function() {
    this.getTrackInfo = function(value) {
        if (typeof value !== "undefined")
            Meteor.subscribe("publishAllOrder", () => {
                Order.find({
                    _id: value
                }).fetch().map((doc) => {
                    Meteor.subscribe("findOne", doc.productOrdered, () => {
                        let data = {
                            orderId: doc._id,
                            productId: doc.productOrdered,
                            proDetails: Products.find({}).fetch()[0]
                        };
                        if (Meteor.isDevelopment) console.log(data)
                            //if()
                        Blaze.renderWithData(Template.order_info, {
                            pro: data,
                            details: data.proDetails
                        }, $(".order-list")[0]);
                    })
                })
            });
    }
    const orderKey = FlowRouter.getParam("orderkey");
    if (orderKey) check(orderKey, String);
    if (orderKey && typeof orderKey !== "undefined") {
        this.getTrackInfo(orderKey);
    }
})

Template.track_order.events({
    "submit form": (event, template) => {
        event.preventDefault();
        var value = $(event.currentTarget).find("#getOrderId").val();
        check(value, String);
        template.getTrackInfo(value);
        console.log(template)

    }
})

Template.track_order.helpers({

})
