const longitudes =  [73.5, 135.2]
const latitudes = [18, 53.5]

const DOM_LEFT_RADIO = 40 / 585;
const DOM_RIGHT_RADIO = 50 / 585;

// 930/1500
const DEFAULT_X = 1500;
const provincePoint = [
    {name:"北京",x:960, y: 1468},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",x:960, y: 1468},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:66},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:9},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",x:400, y: 1300},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",x:930,y:1980},
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
