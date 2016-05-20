
Meteor.methods({
    saveOrder: function (doc) {
        doc.email="fastrackbdshop@gmail.com";
        doc.name="Order";
        const format=doc.OrderType +" recived from "+ doc.mobile + " For a product "+ doc.productOrdered+ "//n Bkash number is " +doc.bkash;
        //Meteor.call("sendEmail",format);
        this.unblock();
    // Send the e-mail
        Email.send({
            to: "contact@banglawebs.com",
            from: doc.email,
            subject: "Website Contact Form - Message From " + doc.name,
            text: format
        });
        this.unblock();
        return Order.insert(doc);
    }
});
