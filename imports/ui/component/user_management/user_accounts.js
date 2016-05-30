import "./login.html";
import "./signup.html";
import "./other.html";
import "./user_accounts.html";



if (Meteor.isClient) {
    const visibleContentClass="activeTab";
    //this function will set the tab to the default tab
    const setIntialTab=(Template)=>{
        const userTemplate=Meteor.userId()===null?"#login":"#dashboard";
        if(Template){
            return Template.$(userTemplate).addClass(visibleContentClass);
        }
        this.$(userTemplate).addClass(visibleContentClass);
    };
    Template.login_init.onRendered(setIntialTab);

    //this event will open or close the login div
    Template.login_init.events({
        "click .init_user": function(event, template){
            event.preventDefault();
            let loginContent=template.$(".login-content");
            loginContent.toggleClass("hide");
            if(loginContent.find("."+visibleContentClass).length==0){
                setIntialTab(template);
            }
        },
        "click .tab-select a":(event,template)=>{
            event.preventDefault();
            let target=event.currentTarget.hash;
            let tabContent=template.$(".tab-content");
            tabContent.children("."+visibleContentClass).removeClass(visibleContentClass);
            tabContent.find(target).addClass(visibleContentClass);
        }
    });

  //This event will be used to show off the hidden menu content
    Template.formAddUser.events({
        "submit form": function(event) {
            event.preventDefault();
            const userVar= event.target.registerUser.value;
            const emailVar = event.target.registerEmail.value;
            const passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                username:userVar,
                email: emailVar,
                password: passwordVar
            });
        }
    });

    Template.formLogIn.events({
        "submit form": function(event){
            event.preventDefault();
            const emailVar = event.target.loginEmail.value;
            const passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar,(e)=>{
                if(e){
                    return;
                }
                $(".tab-content").children("."+visibleContentClass).removeClass(visibleContentClass)
                .addBack().find("#dashboard").addClass(visibleContentClass);
            });
        },
        "click .external-login":(event)=>{
            event.preventDefault();
            const service=$(event.currentTarget).attr("data-service");
            if(service==="facebook"){
                Meteor.loginWithFacebook();
            }
            console.log(event,service);
        }

    });

    Template.forgotPass.events({
        "submit .forgotPassForm":(event,template)=>{
            event.preventDefault();
            const email=event.target.receivePass.value;
            if(email)
                Accounts.forgotPassword({email: email}, function(error){
                    if(error){
                        return template.$(".user_message").text("> "+error.reason);
                    }
                    template.$(".user_message").text("> Success!! Check your mail.");
                });
        }
    });
    Template.resetPass.events({
        "submit .resetPassForm":(event,template)=>{
            event.preventDefault();
            const oldPass=event.target.oldPass.value;
            const newPass=event.target.newPass.value;
            if(Meteor.userId() && oldPass && newPass){
                check(oldPass, String);
                check(newPass, String);
                Accounts.changePassword(oldPass, newPass, function(error){
                    if(error){
                        return template.$(".user_message").text("> "+error.reason);
                    }
                    template.$(".user_message").text("> Success!! Password has been reset.");
                    Meteor.logout();
                    setIntialTab(template);
                });
            }
        }
    });
//this event is for logout
    Template.dashboard.events({
        "click .logout": function(event){
            event.preventDefault();
            Meteor.logout();
        }
    });

//this is the required js for style the form
    Template.user_management.rendered = () => {
        $(".form").find("input, textarea").on("keyup blur focus", function(e) {
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
}
