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
    },
    getOrder(user) {
        let promise = new Promise(function(resolve) {
            var val = Order.find({
                userOrdered: user
            }, {
                fields: {
                    productOrdered: 1
                }
            }).fetch().map((doc) => {
                return [doc._id, doc.productOrdered];
            });
            resolve(val);
        });
        /*.then(function(value) {
            var all = [];
            value.forEach((i) => {
                //console.log(i.productOrdered);
                let y = Products.find({
                    _id: i.productOrdered
                }).fetch();
                y[0].orderId = i._id;
                all.push(y);
            });
            return all;
        });
        */
        return promise;
    }
});