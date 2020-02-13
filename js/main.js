(function() {
    'use strict';

    var langs = {
        en: {
            pc: 'Pilot Center',
            reg: 'Register',
            fc: 'Flight Center',
            ac: 'Activity Center',
            ap: 'All Pilots',
            at: 'About',
            al: 'Airlines',
            rt: 'Routes',
            ft: 'Fleet',
            sf: 'Staff',
            tr: 'Tracker',
            lang: 'en'
        },
        cn: {
            pc: '飞行员中心',
            reg: '注册',
            fc: '飞行中心',
            ac: '活动中心',
            ap: '全部飞行员',
            at: '关于',
            al: '航空公司',
            rt: '航线',
            ft: '机队',
            sf: '员工',
            tr: '飞行追踪器',
            lang: 'cn'
        }
    }

    function renderingNav(lang) {
        setCookie('lang', lang, 60 * 60 * 24 * 365);

        document.querySelector("nav").innerHTML = Mustache.render(window.navHTML, langs[lang]);

        // nav center
        var navCenterEl = document.querySelector("#nav-center"),
            navCenterInnerEl = document.querySelector("#nav-center-inner-" + lang);

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
            navAboutInnerEl = document.querySelector("#nav-about-inner-" + lang);

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


        // render lang change switch
        new Vue({
            el: '#nav-lang',
            data: {
                open: getCookie('lang') !== 'en'
            },
            methods: {
                change: function(status) {
                    if (status) {
                        navLangChange('cn');
                        return;
                    }
                    navLangChange('en');
                }
            }
        })
    }

    function navLangChange(lang) {
        renderingNav(lang);
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            window.navHTML = xmlhttp.responseText;
            if (getCookie('lang') === '') {
                var lang = navigator.language || navigator.userLanguage;
                lang = lang.substr(0, 2);
                if (lang == 'zh') {
                    renderingNav('cn');
                } else {
                    renderingNav('en');
                }
                return;
            }
            renderingNav(getCookie('lang'));
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

    function setCookie(cname, cvalue, exsecs) {
        var d = new Date();
        d.setTime(d.getTime() + (exsecs * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
}());
