Meteor.publish("products", function() {
    return Products.find({});
});

Meteor.publish("findOne", function(id) {
    return Products.find({
        _id: id
    });
});