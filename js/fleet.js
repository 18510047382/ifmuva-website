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
                },
                {
                    img: 'b77w',
                    mod: 'Boeing 波音 B777-300ER',
                    icao: 'B77W',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 550',
                    content: 'The Boeing 777-300ER is a twin-engine (motive) turbofan large wide-body airliner developed and produced by the American Boeing Company. It is also Boeing 777\'s first fuselage extension and range extension. The range is 25% longer than the Boeing 777-300. The goal is to replace the Boeing 747-400.',
                    content_cn: '波音777-300ER是美国波音公司研制生产的双发（动机）涡轮风扇大型宽体客机。也是波音777的首个机身延长型及航程延长型，机身比波音777-200延长了10.2米．航程比波音777-300延长了25%。目标是取代波音747-400型飞机。'
                },
                {
                    img: 'b789',
                    mod: 'Boeing 波音 B787-9',
                    icao: 'B789',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 289',
                    content: 'The Boeing 787 is the first ultra-long-haul medium-sized passenger aircraft in the history of aviation. It is a new model launched by the famous American aircraft manufacturer Boeing on December 15, 2009. The variant\'s typical three-seater seating design can accommodate 242 to 335 passengers. The biggest feature of the Boeing 787 is that it uses a large number of advanced composite materials to build the aircraft skeleton, ultra-low fuel consumption, lower pollution emissions, high efficiency and a comfortable cabin environment.',
                    content_cn: '波音787（英语：Boeing 787）是一款航空史上首架超远程中型客机，是美国著名飞机制造商波音公司于2009年12月15日推出的全新型号。它变体机型中典型的三层座位设计能容纳242至335名乘客。波音787的最大特点是大量采用先进复合材料建造飞机骨架、超低燃料消耗、较低的污染排放、高效益及舒适的客舱环境。'
                },
                {
                    img: 'b738',
                    mod: 'Boeing 波音 B737-800',
                    icao: 'B738',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 189',
                    content: 'The Boeing 737-800 is a member of the Boeing 737NG, an improved version of the new-generation Boeing 737NG family of aircraft. Boeing\'s 737-800 wing design uses new advanced technology, which not only increases the fuel capacity, but also improves the efficiency, which will help extend the range. It is reliable, simple, and extremely economical in operation and maintenance. The cockpit dashboard uses a new large display.',
                    content_cn: '波音737-800是波音737NG的其中一员，是新一代波音737NG系列飞机的改进型。波音737-800机翼的设计采用新的先进技术，不但增加了载油量，而且提高了效率，这都有利于延长航程。具有可靠、简捷，且极具运营和维护成本经济性的特点，驾驶舱的仪表板上采用了新型的大型显示屏。'
                },
                {
                    img: 'a333',
                    mod: 'Airbus 空中客车 A330-300',
                    icao: 'A333',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 300',
                    content: 'The A330-300 aircraft has a two-class cabin layout, can carry 300 passengers, and has 38 business class seats. A330-300: Airbus A330 / A340 has the largest passenger capacity. Compared with the A340-300, the fuselage is the same, except that there are only two engines. The engine-related systems are also different. Shorter.',
                    content_cn: 'A330-300飞机采取两级客舱布局，可以搭载300名乘客，有38个公务舱座位。A330-300型：空客公司A330/A340家族中载客量最大的一种型号，与A340-300型相比，机身相同，只是发动机只有两台，与发动机相关的系统也有所不同，航程较短。'
                },
                {
                    img: 'a319',
                    mod: 'Airbus 空中客车 A319',
                    icao: 'A319',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 142',
                    content: 'The Airbus A319 is a member of the Airbus A320 family and is a reduced and modified version of the A320. The A319 project was launched in June 1993 and first flew in August 1995. It obtained a type certificate in April 1996 and was delivered in May. Because it uses the same fuel capacity and lower passenger capacity as the A320-200, that is, 124 passengers in a 2 equation layout, it can reach a range of 3900 nautical miles (7200 km), which is the most range in the Airbus A320 series. Long model.',
                    content_cn: '空中客车A319是空中客车A320家族的成员，是A320缩小更改的版本。A319项目发起于1993年6月，1995年8月首飞，1996年4月获型号合格证，5月交付使用。由于使用与A320-200相同的燃料容积以及较低的载客量，即2等式布局情况下124名乘客，使得它的航程可以达到3900海里（7200公里），是空中客车A320系列中航程最长的型号。'
                },
                {
                    img: 'a320',
                    mod: 'Airbus 空中客车 A320',
                    icao: 'A320',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 180',
                    content: 'The Airbus A320 series aircraft is a single-aisle double-engined short- and medium-range 150-seat passenger aircraft developed and produced by European Airbus. It is the first commercial aircraft to use a digital telex flight control system, and it is also the first civil airliner to relax the static stability design.',
                    content_cn: '空中客车A320系列飞机是欧洲空中客车公司研制生产的单通道双发中短程150座级客机。是第一款使用数字电传操纵飞行控制系统的商用飞机，也是第一款放宽静稳定度设计的民航客机。'
                },
                {
                    img: 'a321',
                    mod: 'Airbus 空中客车 A321',
                    icao: 'A321',
                    intro: 'Maximum Number Of Passengers(最大乘客数): 220',
                    content: 'The Airbus A321 is a double-engined short- and medium-range passenger aircraft developed by the European Airbus Industry Company. The Airbus A320 is an extended version. It is the largest member of the A320 family of aircraft. Compared with the A320, it has 24% more seats and 40% more space. The wing area has been slightly enlarged. Two emergency exits have been added to the front and rear of the wing. The landing gear has been reinforced and uses high-thrust CFM56 and V2500 engines.',
                    content_cn: '空客A321是欧洲空中客车工业公司研制的双发中短程客机，空中客车A320加长型。是A320系列飞机中最大的飞机成员。与A320相比，增加24%的座位和40%的空间，机翼面积略微扩大，在机翼前后各增加两个应急出口，起落架被加固，使用高推力CFM56和V2500发动机。'
                }
            ]
        }
    })
}());
