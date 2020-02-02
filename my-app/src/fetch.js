import _fetch from 'unfetch';

const fetch = (url, options = {}) => {
    options.headers = {
        Accept: 'application/json',
        'content-type': 'application/json;charset=UTF-8',
        ...options.headers
    }
    return _fetch(url, options).then(res => {
        if (res.status === 200 && res.ok) {
            return res.json()
        }
        return Promise.reject(res)
    })
}
export const fetchRankData = (data) => fetch('http://yapi.corp.qunar.com/mock/4159/rankdata', {
    body: JSON.stringify(data)
})

export const fetchHomeData = () => fetch('http://yapi.corp.qunar.com/mock/4159/homedata')


export const light = (data) => fetch('http://yapi.corp.qunar.com/mock/4159/uuid', {
    data: JSON.stringify(data),
    method: 'POST'
})