(function() {
    'use strict';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.querySelector("nav").innerHTML = xmlhttp.responseText;

            // nav center
            var navCenterEl = document.querySelector("#nav-center"),
                navCenterInnerEl = document.querySelector("#nav-center-inner");

            navCenterEl.onmouseover = function() {
                navCenterInnerEl.style.display = 'block';
            }
            navCenterInnerEl.onmouseover = function() {
                navCenterInnerEl.style.display = 'block';
            }

            navCenterEl.onmouseout = function() {
                navCenterInnerEl.style.display = 'none';
            }
            navCenterInnerEl.onmouseout = function() {
                navCenterInnerEl.style.display = 'none';
            }


            // nav about
            var navAboutEl = document.querySelector("#nav-about"),
                navAboutInnerEl = document.querySelector("#nav-about-inner");

            navAboutEl.onmouseover = function() {
                navAboutInnerEl.style.display = 'block';
            }
            navAboutInnerEl.onmouseover = function() {
                navAboutInnerEl.style.display = 'block';
            }

            navAboutEl.onmouseout = function() {
                navAboutInnerEl.style.display = 'none';
            }
            navAboutInnerEl.onmouseout = function() {
                navAboutInnerEl.style.display = 'none';
            }
        }
    }

    xmlhttp.open("GET", "template/nav.html", true);
    xmlhttp.send();

    if (location.pathname !== '/' && location.pathname !== '/index.html' && location.pathname !== '/websites/ifmuva/index.html') return;

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
                            content: 'Join us on <a href="https://join.slack.com/t/ifmuva/shared_invite/enQtODY3ODkxMDg2NjczLTQwMWRiMTU0OTFkZmU5YWU4ZDk2MGIzYTc1MmQ4NDY3OGM2ZDBmOWM3YTEyZDU4ZTkwNWJmZTNlZmZjOTI5NTY">Slack</a>!<br><br>同时也欢迎加入我们的官方QQ群！QQ群号：991489400。'
                        })
                    }
                }
            })

            new Vue({
                el: '#footer-close',
                methods: {
                    closeFooter: function() {
                        document.querySelector('footer').style.display = 'none';
                    }
                }
            })
        }
    }

    xmlhttp2.open("GET", "template/footer.html", true);
    xmlhttp2.send();
}());
