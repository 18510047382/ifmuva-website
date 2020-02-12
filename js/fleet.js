(function() {
    'use strict';

    new Vue({
        el: '#fleet-container',
        data: {
            fleet: [{
                    img: 'img/aircraft/a350.jpg',
                    mod: 'Airbus 空中客车 A350-900',
                    icao: 'A359',
                    intro: 'kldkdl',
                    content: '主要内容'
                },
                {
                    img: '',
                    mod: 'Boeing 波音 B777-200F',
                    icao: 'B77F',
                    intro: 'kldkdl',
                    content: '主要内容'
                }
            ]
        }
    })
}());
