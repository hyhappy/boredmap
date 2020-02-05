import _fetch from 'unfetch';
import Loading from './component/loading';


const BASE_URL = 'https://www.store188.com';

const fetch = (url, options = {}) => {
    url = BASE_URL + url;
    if (url.indexOf('?') > -1) {
        url += '&source=HTML5'
    } else {
        url += '?source=HTML5'
    }
    options.headers = {
        Accept: 'application/json',
        'content-type': 'application/json;charset=UTF-8',
        ...options.headers
    }
    Loading.show();
    return _fetch(url, options).then(res => {
        Loading.hide();
        if (res.status === 200 && res.ok) {
            return res.json()
        }
        return Promise.reject(res)
    }).catch((e) => {
        Loading.hide();
        return Promise.reject(e);
    })
}

const STORAGE_KEY = 'BOREDMAP_UUID';

export const fetchRankData = (data) => {
    const params = `?latitude=${data.latitude}&longitude=${data.longitude}`
    return fetch('/rankdata' + params)
    // .catch(() => {
    //     return {"belongToChina":false,"province":"","provinceNo":0,"provinceSum":0,"rankData":[{"province":"重庆","provinceSum":9873},{"province":"福建","provinceSum":9058},{"province":"黑龙江","provinceSum":8967},{"province":"天津","provinceSum":8796},{"province":"海南","provinceSum":8765},{"province":"青海","provinceSum":7689},{"province":"云南","provinceSum":7658},{"province":"山东","provinceSum":6890},{"province":"安徽","provinceSum":6756},{"province":"澳门","provinceSum":6579},{"province":"甘肃","provinceSum":6548},{"province":"吉林","provinceSum":6543},{"province":"山西","provinceSum":6525},{"province":"广西","provinceSum":5895},{"province":"江西","provinceSum":5789},{"province":"湖南","provinceSum":5678},{"province":"河南","provinceSum":5479},{"province":"新疆","provinceSum":4907},{"province":"西藏","provinceSum":4789},{"province":"浙江","provinceSum":4789},{"province":"陕西","provinceSum":4589},{"province":"四川","provinceSum":4368},{"province":"内蒙古","provinceSum":3790},{"province":"宁夏","provinceSum":3679},{"province":"上海","provinceSum":3678},{"province":"广东","provinceSum":3678},{"province":"贵州","provinceSum":3567},{"province":"香港","provinceSum":3379},{"province":"河北","provinceSum":3297},{"province":"江苏","provinceSum":2789},{"province":"湖北","provinceSum":2567},{"province":"北京","provinceSum":2352},{"province":"台湾","provinceSum":2348},{"province":"辽宁","provinceSum":1467}]}
    // })
}

export const fetchHomeData = () => {
    const uuid = localStorage.getItem(STORAGE_KEY);
    return fetch(uuid ? `/homedata/${uuid}` : '/homedata').then(data => {
        if (data.UUID) {
            localStorage.setItem(STORAGE_KEY, data.UUID);
        }
        return data;
    })
}


export const light = (data) => {
    const uuid = localStorage.getItem(STORAGE_KEY);
    return fetch(`/${uuid}`, {
        data: JSON.stringify(data),
        method: 'POST'
    })
    .catch(() => {
        return {
            "belongChina": true,
            "repeat": false,
            "province": "海南",
            "city": "阿拉善盟",
            "countryNo": 34605,
            "provinceNo": 3791,
            "provinceSum": 3791,
            "sumAtSameTime": 1,
            "provinceRank": 23
        }
    })
}