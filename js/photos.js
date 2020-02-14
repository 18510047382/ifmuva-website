(function() {

    var inner = '',
        pcEl = document.querySelector('#photos-container');

    for (var i = 0; i <= 4; i++) {
        inner += '<img height="300px" width="350px" title="Click to enlarge 点击放大" onclick="enlargePhoto(this)" data-src="img/photos/' + i + '.jpg">';
    }
    for (var i = 0; i <= 4; i++) {
        inner += '<img height="300px" width="350px" title="Click to enlarge 点击放大" onclick="enlargePhoto(this)" data-src="img/photos/' + i + '.jpg">';
    }

    pcEl.innerHTML = inner;


    // lazyload
    var allImgs = document.querySelectorAll('#photos-container img'),
        timer;

    function lazyload() {
        timer = setTimeout(function() {
            for (var i = 0; i < allImgs.length; i++) {
                if (allImgs[i].offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop + 100) {
                    allImgs[i].src = allImgs[i].dataset.src;
                    allImgs[i].onload = function(){
                        this.setAttribute('height', '');
                        this.setAttribute('width', '');
                    }
                }
            }
            clearTimeout(timer);
        }, 50);
    }

    // init
    lazyload();

    window.onscroll = lazyload;

    window.enlargePhoto = function(el) {
        var largeImgEl = document.querySelector('#large-photo');
        document.querySelector('#shade').style.display = largeImgEl.style.display = 'block';
        largeImgEl.style.backgroundImage = 'url(' + el.src + ')';
    }

    document.querySelector('#shade').onclick = function() {
        this.style.display = document.querySelector('#large-photo').style.display = 'none';
    }

}());
