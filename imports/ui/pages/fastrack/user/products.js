import "./products.html";

Template.fastrackbd_pro.onCreated(()=> {
    Meteor.subscribe("products");
});

Template.fastrackbd_pro.helpers({
    productsAll: ()=> {
        return Products.find().fetch();
    }
});
