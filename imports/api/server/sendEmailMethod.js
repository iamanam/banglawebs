import { Email } from "meteor/email";
//import "../schema/contactSchema.js";
if(Meteor.isServer){
    const smtp = {
        username: "contact@banglawebs.com",
        password: "Ammu@01734093940",
        server: "smtp.1and1.com",
        port: 587
    };
    process.env.MAIL_URL = "smtp://" +  // For user password reset
        encodeURIComponent(smtp.username) + ":" +
        encodeURIComponent(smtp.password) + "@" +
        encodeURIComponent(smtp.server) + ":" +
        smtp.port;
}
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
