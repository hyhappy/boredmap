export const getLocation = () => new Promise((resolve, reject) => {
    window.wx.getLocation({
        success(data) {
            if (data.latitude && data.longitude) {
                resolve(data);
            } else {
                reject()
            }
        }
    })
    setTimeout(() => {
        // reject();
        resolve({
            latitude:38.6518,
            longitude:104.07642
        })
        
    }, 3000)
})