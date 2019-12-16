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
                }
            ],
            fleet: [
                {
                    man: 'Airbus',
                    mod: 'A350-900'
                },
                {
                    man: 'Boeing',
                    mod: 'B777-200F'
                }
            ]
        }
    })
}());
