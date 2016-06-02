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


Template.formLogIn.events({
    "click [data-social-login]":( event) =>{
        event.preventDefault();
        const service = event.currentTarget.getAttribute( "data-social-login" ),
            options = {
                requestPermissions: [ "email" ]
            };
        if ( service === "loginWithTwitter" ) {
            delete options.requestPermissions;
        }
        Meteor[service](options, function (err) {
            if (err)
                Session.set("errorMessage", err.reason || "Unknown error");
        });
    }
});
