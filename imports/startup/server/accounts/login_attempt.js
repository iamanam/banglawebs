if (Meteor.isServer) {
    const loginAttempt = Modules.server.loginAttempt;
    Accounts.validateLoginAttempt(function(loginData) {
        const inData = (data) => {
            return loginAttempt.upsert(data.ip, {
                attempt: data.attempt,
                allowed: data.allowed,
                blockedTime: data.blockedTime
            });
        }
        const ip = loginData.connection.clientAddress;
        let getData = loginAttempt.findOne(ip);
        let attempt = typeof getData == "object" ? getData.attempt : 1;
        if (loginData.error) {
            attempt++;
            if (attempt == 5) {
                inData({
                    ip: ip,
                    attempt: attempt,
                    allowed: false,
                    blockedTime: Date.now() + 30 * 60 * 1000
                });
                throw new Meteor.Error(403, "You are blocked for 30 min. Try later!")
            } else if (attempt > 5) {
                throw new Meteor.Error(403, "In few more tries you account will be blocked permanently. Reset pass if needed." +
                    Math.round((getData.blockedTime - Date.now()) / 1000 / 60) + " min");
            } else {
                inData({
                    ip: ip,
                    attempt: attempt,
                    allowed: true,
                    blockedTime: 0
                });
            }
            console.log(getData, attempt);
        } else {
            if (getData.allowed === true || getData.blockedTime < Date.now()) {
                //reset the db as user now logged in freshly
                inData({
                    ip: ip,
                    attempt: 0,
                    allowed: true,
                    blockedTime: 0
                });
                attempt = 0;
                return true;
            } else {
                throw new Meteor.Error(403, "Ur blocked. Try  after " +
                    Math.round((getData.blockedTime - Date.now()) / 1000 / 60) + " min");
            }
        }
    })
}
