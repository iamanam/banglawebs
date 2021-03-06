ContactSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 10,
                class: "foo"
            }
        }
    }
});
