/**
 * Created by iaman on 5/9/2016.
 */
import "./hosting.html";
var pack = [{
    "title": "Web hosting",
    "price": "From $2.00/month",
    "icon": "fa fa-home",
    "featurePack": ["Instant setup", "UK Data Centre", "1-Click Install WordPress", "cPanel control panel"]
}, {
    "title": "Reseller",
    "price": "From $6.00/month",
    "icon": "fa fa-arrows-alt",
    "featurePack": ["Instant setup", "UK Data Centre", "1-Click Install WordPress", "cPanel control panel"]
}, {
    "title": "Vps",
    "price": "From $9.95/month",
    "icon": "fa-star fa",
    "featurePack": ["Instant setup", "UK Data Centre", "1-Click Install WordPress", "cPanel control panel"]
}, {
    "title": "Cloud service",
    "price": "From $0.00/month",
    "icon": "fa fa-cloud",
    "featurePack": ["Instant setup", "UK Data Centre", "1-Click Install WordPress", "cPanel control panel"]
}];


Template.hosting.helpers({
    packageTotal: function() {
        return pack;
    }
});

Template.domain_search.rendered = function() {};
