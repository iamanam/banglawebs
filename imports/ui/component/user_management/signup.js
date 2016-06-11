import "./signup.html";

if (Meteor.isClient) {
    //This event will be used to show off the hidden menu content
    Template.formAddUser.events({
        "submit .addUser": function(event, template) {
            event.preventDefault();
            const userVar = event.target.registerUser.value;
            const emailVar = event.target.registerEmail.value;
            const passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                username: userVar,
                email: emailVar,
                password: passwordVar
            }, (error) => {
                const errorDiv = $(".error-field").get(0);
                if (error) {
                    return Blaze.renderWithData(Template.form_error, {
                        error_message: error.message
                    }, errorDiv);
                }
                $(template.firstNode).parent().removeClass("activeTab");
                return $("#dashboard").addClass("activeTab");

            });
        }
    });
}
