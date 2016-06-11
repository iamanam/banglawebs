import "./order";
import "./products";
import "../common/header.html";


Template.header_store.rendered = function() {
    // intilizing the external plugin okayNav
    let navigation = $("#nav-main").okayNav();
};
