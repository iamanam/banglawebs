import "./admin.html";
const priceCalculate = (price)=> {
    let banglaPrice = price * 1.20;
    var profit = (banglaPrice / 100) * 30;
    return banglaPrice + profit + 200;
};

AutoForm.hooks({
    insertProductForm: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            ProductsSchema.clean(insertDoc);
            insertDoc.priceTaka = priceCalculate(insertDoc.price);
            const self = this;
            Meteor.call("saveProduct", insertDoc, function (error, result) {
                if (error)
                    return error;
                self.done(null, result);
            });
        },
        onSuccess: function (formType, result) {
            console.log(result);
        }
    },
    "insertOrder": {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            const self = this;
            Meteor.call("saveOrder", insertDoc, function (error, result) {
                if (error)
                    return error;
                self.done(null, result);
            });
        }, onSuccess: function (formType, result) {
            console.log(result);
        }
    }
});

Template.fastrackbd_order.events({
    "submit #insertOrder ": function (e) {
        e.preventDefault();
    }
})