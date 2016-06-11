//importing html template
import "./other.html";
import "./user_accounts.html";
import "./forgotpass";
import "./resetpass";
import "./signup";
import loginManagement from "./login";


function UserManagement() {
    var self = this;
    self.tabContainer = $(".tab-content");
    self.tabSelector = $(".tab-select");
    self.template = Template.user_management;
    self.loginTem = Template.formLogIn;
    self.initContent = Template.initUserManagement;
    //starup function to add active class on tab but it won't be visibiable unless user click
    self.setInitalTab = (visibleTab = Meteor.userId() ? "#dashboard" : "#login") => {
        this.tabContainer.find(visibleTab).addClass("activeTab");

    };
    self.initContent.events({
        "click .init_user": function(event, template) {
            event.preventDefault();
            self.userContent = template.$(".login-content");
            self.errorDiv = template.$(".error-field");
            self.userContent.toggleClass("hide");
            if (!self.userContent.hasClass("hide")) {
                return Session.set("openForm", true)
            }
            Session.set("openForm", false);
        }
    });
    self.initContent.helpers({
        "openForm": () => {
            return Session.get("openForm");
        }
    })
    self.FormErrorCatcher = (error) => {
        if (error) {
            return self.errorDiv.find("span").text(0).text(error.message).addBack().show();
        }
        self.errorDiv.find("span").hide();
    }
};


//User management will inherit all the function from template user management have
UserManagement.prototype = Object.create(Template.user_management);
UserManagement.prototype.isValidAction = (action) => {
    const actionsAllowed = ["#login", "#signup", "#resetPass", "#forgotPass", "#logout", "#dashboard"];
    if (actionsAllowed.indexOf(action) === -1)
        throw new Meteor.Error(403, "Action is forbidden");
    return action;
}

ManageUserForm = new UserManagement();
ManageUserForm.template.onRendered(function() {
    UserManagement.call(this);
    this.setInitalTab();
    //set the session in the begining is important as sometime old session doesn't get clear
    Session.set("openForm", false);
})

//setting events for Template formLogIn or login template
ManageUserForm.loginTem.events(loginManagement.events(ManageUserForm));


ManageUserForm.template.events({
    //this event is for logout button which has class of .logout
    "click .logout": function(event) {
        event.preventDefault();
        Meteor.logout();
    },
    "click .tab-select a": function(event, template) {
        event.preventDefault();
        let action = ManageUserForm.isValidAction(event.currentTarget.hash);
        console.log(action);
        let container = template.$(".tab-content");
        container.children(".activeTab").removeClass("activeTab");
        container.children(action).addClass("activeTab");
    }
});

//this is the required js for style the form
Template.user_management.rendered = () => {
    $(".user-form").find("input, textarea").on("keyup blur focus", function(e) {
        var $this = $(this),
            label = $this.prev("label");
        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {

            if ($this.val() === "") {
                label.removeClass("highlight");
            } else if ($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

};
