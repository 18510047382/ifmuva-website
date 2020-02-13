(function() {

    var modal = new Vue({
        el: '#modal',
        data: {
            modal: false
        },
        methods: {
            onOK: function() {
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeDPBRN0OZF3FImigb9Q39WNacbibG7VSFUi98AXjbSmhsSHw/viewform?usp=sf_link';
            }
        }
    })

    var lang = navigator.language || navigator.userLanguage;
    lang = lang.substr(0, 2);
    if (lang == 'zh') {
        modal.modal = true;
    }

}());
