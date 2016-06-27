Template.resetPass.events({
    "submit .resetPassForm": (event, template) => {
        event.preventDefault();
        const oldPass = event.target.oldPass.value;
        const newPass = event.target.newPass.value;
        if (Meteor.userId() && oldPass && newPass) {
            check(oldPass, String);
            check(newPass, String);
            Accounts.changePassword(oldPass, newPass, function(error) {
                if (error) {
                    return template.$(".user_message").text("> " + error.reason);
                }
                template.$(".user_message").text("> Success!! Password has been reset.");
                Meteor.logout();
                setIntialTab(template);
            });
        }
    }
});
