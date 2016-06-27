/**
 * Created by iaman on 5/19/2016.
 */

Meteor.publish("orderedProduct", (productId) => {
    return Order.findOne({
        _id: productId
    })
})
Meteor.publish("publishAllOrder", () => {
    return Order.find({})
})
Meteor.publish("publishProductById", (user) => {
    return Order.find({
        userOrdered: user
    });
    throw new Meteor.Error(404, "Couldnt find the user registered");
})
