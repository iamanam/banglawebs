Meteor.methods({
    sendEmail: function(doc,content) {
    // Important server-side check for security and data integrity
        //check(doc, ContactSchema);
    // Build the e-mail text
        this.unblock();
    // Send the e-mail
        return Email.send({
            to: "contact@banglawebs.com",
            from: doc.email,
            subject: "Website Contact Form - Message From " + doc.name,
            text: content
        });
    }
});
