import './index.css';

let loadingEle
const renderDialog = (opt = {}) => {
    const { className = '', text } = opt
    const renderTpl = `<div class="cf-modal ${className}"><div class="cf-loading"><i class="ico"></i>${text ? `<span class="text">${text}</span>` : ''}</div></div>`

    if (!loadingEle) {
        loadingEle = document.createElement('div');
        loadingEle.innerHTML = renderTpl;
        document.body.appendChild(loadingEle);
    } else {
        loadingEle.innerHTML = renderTpl;
    }
};

const Loading = {
    show: opt => {
        renderDialog(opt)
        loadingEle.style.display = 'block'
    },
    hide: () => {
        if (loadingEle) loadingEle.style.display = 'none'
    }
}

export default Loading
