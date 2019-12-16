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

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
        if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
            document.querySelector("footer").innerHTML = xmlhttp2.responseText;
            new Vue({
                el: '#footer-join-us',
                methods: {
                    joinUs: function() {
                        this.$Modal.info({
                            title: 'Join Us（加入 IFMUVA）',
                            content: '欢迎加入我们的官方QQ群！QQ群号：991489400'
                        })
                    }
                }
            })
        }
    }
    xmlhttp2.open("GET", "template/footer.html", true);
    xmlhttp2.send();

    new Vue({
        el: '#about'
    })
}());
