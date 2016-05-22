ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1751773531705380",
    secret: "d78d64056ebc54c97ab9ba7425a53b24"
});
Accounts.config({
    sendVerificationEmail:true
});
/**
 * Created by iaman on 5/8/2016.
 */
 // Ensuring every user has an email address, should be in server-side code
Accounts.validateNewUser((user) => {
    new SimpleSchema({
        _id: { type: String },
        emails: { type: Array },
        "emails.$": { type: Object },
        "emails.$.address": { type: String },
        "emails.$.verified": { type: Boolean },
        createdAt: { type: Date },
        services: { type: Object, blackbox: true }
    }).validator(user);

   // Return true to allow user creation to proceed
    return true;
});
