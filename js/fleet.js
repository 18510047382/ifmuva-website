(function() {
    'use strict';

    new Vue({
        el: '#fleet-container',
        data: {
            fleet: [{
                    img: 'a359',
                    mod: 'Airbus 空中客车 A350-900',
                    icao: 'A359',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 319',
                    content: "The Airbus A350-900 is a newly introduced double-engined medium-sized ultra-long-range wide-body passenger aircraft newly introduced by China Eastern Airlines. It is a faster and more efficient model with a large number of technologies developed and applied for the A380 and its performance In terms of innovative aircraft, the maximum range is 15,000 kilometers.",
                    content_cn: "空中客车A350-900是中国东方航空公司全新引进的双发中型超长程宽体客机，是一款速度更快、效率更高的机型，性能采用了大量为A380开发和应用的技术，以及生产方面的创新的飞机，最大航程达15000公里。"
                },
                {
                    img: 'b77f',
                    mod: 'Boeing 波音 B777-200F',
                    icao: 'B77F',
                    intro: 'Maximum Cargo Capacity(最大载货量): 103 Tons',
                    content: 'In order to replace the old 747-400F and the discontinued MD-11F, based on the long-range 777-200LR, a Boeing 777 full cargo aircraft model 777-F was developed, using a GE 90-110B1L engine. The thrust is 110,100 pounds of force.',
                    content_cn: '为了取代旧有的747-400F和已经停产的MD-11F，于是便以航程较远的777-200LR为基础，开发出一款波音777全货机型号777-F，采用通用电气GE90-110B1L发动机，推力达110,100磅力。'
                }
            ]
        }
    })
}());
