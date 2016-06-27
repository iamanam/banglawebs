import {
    Accounts
} from "meteor/accounts-base";
import "./accounts_ui";
import "./account-config";
import "./email_template";
import "./mail_env";
import "./configure-services";
import "./login_attempt";

//This will intiliaze the service
Modules.server.configureServices();
