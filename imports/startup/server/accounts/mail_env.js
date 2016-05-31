import { Email } from "meteor/email";
//import "../schema/contactSchema.js";
if(Meteor.isServer){
    const smtp = {
        username: Meteor.settings.MAIL_URL.username,
        password: Meteor.settings.MAIL_URL.password,
        server: Meteor.settings.MAIL_URL.server,
        port: Meteor.settings.MAIL_URL.port
    };

    process.env.MAIL_URL = "smtp://" +  // For user password reset
        encodeURIComponent(smtp.username) + ":" +
        encodeURIComponent(smtp.password) + "@" +
        encodeURIComponent(smtp.server) + ":" +
      smtp.port;
}
