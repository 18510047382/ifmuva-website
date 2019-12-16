(function() {
    'use strict';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.querySelector("nav").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "template/nav.html", true);
    xmlhttp.send();

    new Vue({
        el: '#about'
    })

    new Vue({
        el: '#join-us'
    })
}());
