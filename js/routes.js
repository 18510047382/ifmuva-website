(function() {
    'use strict';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var routesData = JSON.parse(xmlhttp.responseText);

            for (var i = 100; i < routesData.length + 100; i++) {
                routesData[i - 100].num = 'MU' + i;
            }

            new Vue({
                el: '#routes-table',
                data: {
                    columns: [{
                            title: 'Flight Number',
                            key: 'num'
                        },
                        {
                            title: 'Departure Airport',
                            key: 'da'
                        },
                        {
                            title: 'Arrive Airport',
                            key: 'aa'
                        }
                    ],
                    routes: routesData
                }
            })
        }
    }
    xmlhttp.open("GET", "data/routes.json", true);
    xmlhttp.send();
}());
