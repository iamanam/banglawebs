Meteor.methods({
    saveProduct: function (doc) {
        return Products.insert(doc);
    }
});
