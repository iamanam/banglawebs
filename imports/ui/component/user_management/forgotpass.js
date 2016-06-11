Template.forgotPass.events({
    "submit .forgotPassForm": (event, template) => {
        event.preventDefault();
        const email = event.target.receivePass.value;
        if (email)
            Accounts.forgotPassword({
                email: email
            }, function(error) {
                if (error) {
                    return template.$(".user_message").text("> " + error.reason);
                }
                template.$(".user_message").text("> Success!! Check your mail.");
            });
    }
});
