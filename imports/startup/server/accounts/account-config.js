import "./accounts_ui";

if(Meteor.isServer){
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
      //restrictCreationByEmailDomain: "school.edu",
      //loginExpirationDays: 30
      //oauthSecretKey: "wgporjigrpqgdfg"
    });
    Accounts.ui.config({
        requestPermissions: {
            facebook: ["email"]
        },
        requestOfflineToken: {},
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });

/**
Outh service configurations
*/

  /**
   * Created by iaman on 5/8/2016.
   */
   // Ensuring every user has an email address, should be in server-side code
    Accounts.validateNewUser((user) => {
        new SimpleSchema({
            _id: { type: String },
            userName:{type:String},
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

}
