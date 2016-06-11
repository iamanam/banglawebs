Meteor.methods({
    saveOrder: function(doc) {
        doc.email = "mybanglawebs@gmail.com";
        doc.name = "Order";
        const format = doc.OrderType + " recived from " + doc.mobile + " For a product " + doc.productOrdered + "//n Bkash number is " + doc.bkash;
        //Meteor.call("sendEmail",format);
        this.unblock();
        // Send the e-mail
        Order.insert(doc);
        this.unblock();

        Email.send({
            to: "fastrackbdshop@gmail.com",
            from: doc.email,
            subject: "Website Contact Form - Message From " + doc.name,
            text: format
        });
    }
});
