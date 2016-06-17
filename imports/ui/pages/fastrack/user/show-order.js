import "./show-order.html";

Template.show_order.onCreated(function() {
    this.orderedPro = new ReactiveVar();
    this.collector = [];
    this.autorun(() => {
        this.subscribe("products");
        this.subscribe("publishProductById", Meteor.userId());
        // this.subscribe("findOne", this.orderedPro.get());
    });
});

Template.show_order.helpers({
    //This helper will fetch every order given by certain user;
    orderedProductByUser: function() {
        var val = Order.find({
            userOrdered: Meteor.userId()
        }, {
            fields: {
                productOrdered: 1
            }
        }).fetch().map((doc) => {
            return {
                orderId: doc._id,
                productId: doc.productOrdered,
                proDetails: Products.find({
                    _id: doc.productOrdered
                }).fetch()[0]
            };
        });
        console.log(val);
        return val;
    },
    items: () => {
        return Template.instance().orderedPro.get();
    }
});
