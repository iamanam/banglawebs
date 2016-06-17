import "./order";
import "./products";
import "./show-order";
import "./track_order";
import "../common/header.html";



Template.header_store.rendered = function() {
    // intilizing the external plugin okayNav
    let navigation = $("#nav-main").okayNav();
};
