import"./order.html";


Template.fastrackbd_order.onCreated(() => {
    const productId = FlowRouter.getParam("productCode");
    Meteor.subscribe("findOne", productId);

});

Template.fastrackbd_order.helpers({
    thisProduct: ()=> {
        const productId = FlowRouter.getParam("productCode");
        check(productId, String);
        const singleProduct = Products.findOne({_id: productId});
        return singleProduct;

    }
});
AutoForm.hooks({
    "insertOrder": {
        onSubmit: function (insertDoc) {
            this.event.preventDefault();
            const self = this;
            const orderEmail="New order recived from ";

            Meteor.call("saveOrder", insertDoc, function (error, result) {
                if (error)
                    return error;
                self.done(null, result);
            });
        },
        onSuccess: function (formType, result) {
            $(".fastrack_store").append("<h3 class='form-success'>Order posted successfully</h3>");
        }
    }
});
