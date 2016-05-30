if(Meteor.isClient){
    Accounts.config({
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    //restrictCreationByEmailDomain: "school.edu",
    //loginExpirationDays: 30
      //  oauthSecretKey: "wgporjigrpqgdfg"
    });
}
