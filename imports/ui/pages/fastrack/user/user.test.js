import {
    Meteor
} from 'meteor/meteor';
import {
    chai
} from 'meteor/practicalmeteor:chai';
import {
    $
} from 'meteor/jquery';
import {
    FlowRouter
} from "meteor/kadira:flow-router";
import {
    BlazeLayout
} from "meteor/kadira:blaze-layout";
import {
    _
} from 'meteor/underscore';
import {
    Template
} from 'meteor/templating';
import {
    Blaze
} from 'meteor/blaze';
import {
    Tracker
} from 'meteor/tracker';

var a = chai.assert;
describe('fastrack testing module', function() {
    it('template shoud be defined', function() {
            // This code will be executed by the test driver when the app is started
            // in the correct mode
            a.typeof(Template, "function"));

    })
})
