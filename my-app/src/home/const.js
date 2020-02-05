const longitudes =  [73.5, 135.2]
const latitudes = [18, 53.5]

const DOM_LEFT_RADIO = 40 / 585;
const DOM_RIGHT_RADIO = 50 / 585;

// 930/1500
const DEFAULT_X = 2662;
const provincePoint = [
    {name:"北京",x:1860, y: 1181},
    {name:"天津",x:1900,y:1216},
    {name:"河北",x:1800,y:1250},
    {name:"山西",x:1710, y: 1324},
    {name:"内蒙古",x: 1558,y:1216},
    {name:"辽宁",x:2050,y:1080},
    {name:"吉林",x:2150,y:940},
    {name:"黑龙江",x:2150,y:800},
    {name:"上海",x:2120,y:1589},
    {name:"江苏",x:2040,y:1506},
    {name:"浙江",x:2068,y:1700},    
    {name:"安徽",x:1950,y:1560},
    {name:"福建",x:2000,y:1874},
    {name:"江西",x:1895,y:1800},
    {name:"山东",x:1923,y:1368},
    {name:"河南",x:1777,y:1500},
    {name:"湖北",x:1723,y:1633},
    {name:"湖南",x:1700,y:1800},
    {name:"重庆",x:1550,y:1700},
    {name:"四川",x:1300,y:1700},
    {name:"贵州",x:1500,y:1860},
    {name:"云南",x:1257,y:1987},
    {name:"西藏",x:667,y:1508},
    {name:"陕西",x:1578,y:1500},
    {name:"甘肃",x: 1394,y:1452},
    {name:"青海",x:1000,y:1400},
    {name:"宁夏",x:1466,y:1352},
    {name:"新疆",x:700, y: 1000},
    {name:"广东",x:1816,y:2000},
    {name:"广西",x:1592,y:2019},
    {name:"海南",x:1647,y:2247},
    {name:"台湾",x:2146,y:1956},
    {name:"香港",x:1848,y:2076},
    {name:"澳门",x:1800,y:2091},    
];

export const getPoint = province => {
    let point = provincePoint[0];
    provincePoint.forEach(p => {
        if (province.indexOf(p.name) > -1) {
            point = p;
        }
    })
    return {
        x: point.x / DEFAULT_X * window.screen.width,
        y: point.y / DEFAULT_X * window.screen.width
    };
}

// export const getRatio = province => {
//     const { latitude, longitude } = locate;
//     if (latitude < latitudes[0] || latitude > latitudes[1]) return false;
//     if (longitude < longitudes[0] || longitude > longitudes[1]) return false;
//     return {
//         x: (longitude - longitudes[0]) / (longitudes[1] - longitudes[0]),
//         y: (latitudes[1] - latitude) / (latitudes[1] - latitudes[0])
//     }
// }
