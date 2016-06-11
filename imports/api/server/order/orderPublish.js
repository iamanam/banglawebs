/**
 * Created by iaman on 5/19/2016.
 */

Meteor.publish("orderedProduct", (productId) => {
    console.log(Order.findOne({
        _id: productId
    }))
    return Order.findOne(productId);
})
Meteor.publish("publishProductById", (user) => {
    return Order.find({
        userOrdered: user
    });
    throw new Meteor.Error(404, "Couldnt find the user registered");
})
