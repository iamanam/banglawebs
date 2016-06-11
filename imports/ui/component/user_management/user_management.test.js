import {
    Meteor
} from 'meteor/meteor';
import {
    chai
} from 'meteor/practicalmeteor:chai';
import {
    $
} from 'meteor/jquery';

describe('my module', function() {
    it('does something that should be tested', function() {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        $(".tab-select a").on("click", function() {
            chai.assert.equal(this, typeof("String"));
            console.log(this);
        })
    })
})
