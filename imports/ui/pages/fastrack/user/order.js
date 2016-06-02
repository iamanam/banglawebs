import"./order.html";


Template.fastrackbd_order.onCreated(() => {
    this.productId = () => FlowRouter.getParam("productCode");
});
Template.name.onCreated = function(){

};


AutoForm.hooks({
    "insertOrder": {
        onSubmit: function (insertDoc) {
            this.event.preventDefault();
            const self = this;
            insertDoc.productOrdered=FlowRouter.getParam("productCode");
            const orderEmail="New order recived from ";
            check(insertDoc,orderSchema);
            const ngpattern=/^(?:\+88|01)?(?:\d{11}|\d{13})$/;
            isValidNumber=ngPattern.test(insertDoc.mobile);
            if(!isValidNumber)
                return Meteor.Error(401,"Number isn't valid");
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
