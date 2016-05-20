/**
 * Created by iaman on 5/9/2016.
 */
 import "./contact.html";

 AutoForm.hooks({
     "SendMail":{
         onSubmit:(insertDoc) => {
             check(insertDoc, ContactSchema);
             this.event.preventDefault();
             const content = "Name: " + insertDoc.name + "\n\n"
                 + "Email: " + insertDoc.email + "\n\n\n\n"
                 + insertDoc.message;
             Meteor.call("sendEmail",insertDoc,content);
             //console.log(insertDoc);
         }
     }

 });
