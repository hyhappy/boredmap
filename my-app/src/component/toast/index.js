import './index.css';

let toastDom = null;

export default {
    show(opt) {
        const content = (typeof opt === 'string' ? opt : opt.content) || 'toast'
        const {
            autoHideTime = 2000,
            extraClass,
            type
        } = opt || {}
        if (!toastDom) {
            toastDom = document.createElement('div')
            document.body.appendChild(toastDom)
        }

        let ico = ''
        if (type === 'success') {
            ico = '<i class="ico"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><defs><style/></defs><path d="M24.031 10.969a.75.75 0 0 0-1.062 0L14 19.938l-4.969-4.97a.75.75 0 1 0-1.062 1.063l5.5 5.5a.752.752 0 0 0 1.062 0l9.5-9.5a.75.75 0 0 0 0-1.062zM16 3C8.831 3 3 8.831 3 16s5.831 13 13 13 13-5.831 13-13S23.169 3 16 3zm0 24.5C9.656 27.5 4.5 22.344 4.5 16S9.656 4.5 16 4.5 27.5 9.656 27.5 16 22.344 27.5 16 27.5z" fill="#fff" class="transform-group"/></svg></i>'
        }
        toastDom.innerHTML = `<div class="cf-toast ${extraClass}">${ico}<span class="text">${content}</span></div>`
        toastDom.style.display = 'block'
        setTimeout(() => {
            this.hide()
        }, autoHideTime)
    },
    hide() {
        toastDom.style.display = 'none'
    }
}
