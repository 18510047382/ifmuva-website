(function() {
    'use strict';

    new Vue({
        el: '#fleet-container',
        data: {
            columns: [{
                    title: 'Manufacturer',
                    key: 'man'
                },
                {
                    title: 'Model',
                    key: 'mod'
                },
                {
                    title: 'Publish Time',
                    key: 'pub'
                }
            ],
            fleet: [
                {
                    man: 'Airbus',
                    mod: 'A350-900',
                    pub: '2019-12-10'
                },
                {
                    man: 'Boeing',
                    mod: 'B777-200F',
                    pub: 'Unknown'
                }
            ]
        }
    })
}());
