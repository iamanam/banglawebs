import "./login.html";

const visibleContentClass = "activeTab";
//This will contain all logic of login
var loginManagement = [];
loginManagement.events = (helper) => {
    if (helper && typeof helper === "object")
        return {
            "submit form.logUser": function(event, template) {
                event.preventDefault();
                const emailVar = event.target.loginName.value;
                const passwordVar = event.target.loginPassword.value;
                Meteor.loginWithPassword({
                    username: emailVar
                }, passwordVar, (error) => {
                    //this will show the error recived from server
                    helper.FormErrorCatcher(error);
                    //if operation is passed then show the dashboard
                    $(template.firstNode).parent().removeClass("activeTab");
                    return $("#dashboard").addClass("activeTab");
                });
            },
            //This is logic for external service login
            "click [data-social-login]": (event) => {
                event.preventDefault();
                const service = event.currentTarget.getAttribute("data-social-login"),
                    options = {
                        requestPermissions: ["email"]
                    };
                if (service === "loginWithTwitter") {
                    delete options.requestPermissions;
                }
                Meteor[service](options, function(err) {
                    if (err)
                        Session.set("errorMessage", err.reason || "Unknown error");
                });
            }
        }
}



export default loginManagement;
