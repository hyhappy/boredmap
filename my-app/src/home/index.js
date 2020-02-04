import React, {useState, useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import { fetchHomeData, light} from '../fetch'
import { getPoint } from './const'
import './index.css';

function Home() {
    const [sum, setSum] = useState(0);
    const [lightInfo, setLightInfo] = useState(null)
    const [isShowShareModal, showShareModal] = useState(false)
    const [isShowImg, showImg] = useState(true)
    const contRef = useRef();
    const pointRef = useRef();


    useEffect(() => {
        fetchHomeData().then(data => {
            setSum(data.sumOfPerson);
        })
        // window.onload = () => {
            
        //     window.wx.getLocation({
        //         success(data) {
        //             console.log(getPoint(data))
        //         }
        //     })
        // }
    }, [])
    
    const onLightTap = () => {
        light({}).then(data => {
            const {x,y} = getPoint(data.province);
            pointRef.current.style.left = x + 'px';
            pointRef.current.style.top = y - 50 + 'px';
            pointRef.current.style.display = 'block';

            if (contRef) {
                const style = contRef.current.style;
                style.webkitTransformOrigin = style.transformOrigin = x+'px ' + (y) + 'px';
                style.webkitTransform = style.transform = 'scale(2.5)';
            }
            setTimeout(() => {
                setLightInfo(data);
                showImg(false);
            }, 1000)
        })
    }

    return (
        <div className="m-page m-home">
            <div className="cont" ref={contRef}>
                <img className="logo" src="http://localhost:5000/%E7%BC%96%E7%BB%84%208@2x.png" alt=""/>
                <div className="total">
                    已有<span className="num">{sum}</span>人<br/>点亮了地图
                </div>
                {
                    isShowImg ? <>
                    <Link to="/rank" className="rank">
                    <img
                        src="http://localhost:5000/%E7%BC%96%E7%BB%84%209@2x.png" alt=""
                    />
                </Link>
                <img
                    onClick={onLightTap}
                    style={{
                        width: '2.47rem',
                    }} src="http://localhost:5000/%E6%8C%89%E9%92%AE@2x.png" alt=""
                />
                    </>:null
                }
                
                <Link to="/intro" className={'intro'}>
                    <svg t="1580630462805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1964" width="14" height="14"><path d="M492.1 184c-18.2 0-37.5 3.8-37.5 37l16 400.5c0 20.3 16.4 36.6 36.6 36.6h3.8V184.3h-3.8c-4.6 0-9.7-0.3-15.1-0.3z m0 0" fill="#3F5F51" p-id="1965"></path><path d="M526.3 184c-5.3 0-10.5 0.3-15.1 0.3h-3.8V658h3.8c20.3 0 36.6-16.4 36.6-36.6l16-400.5c0-33.1-19.3-36.9-37.5-36.9z m0 0M447.9 776.4c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1s-28.7-64.1-64.1-64.1c-35.4 0-64.1 28.7-64.1 64.1z m0 0" fill="#3F5F51" p-id="1966"></path><path d="M512 64c60.5 0 119.2 11.8 174.4 35.2 53.3 22.6 101.3 54.9 142.4 96 41.2 41.2 73.5 89.1 96 142.4C948.2 392.8 960 451.5 960 512s-11.8 119.2-35.2 174.4c-22.6 53.3-54.9 101.3-96 142.4-41.2 41.2-89.1 73.5-142.4 96C631.2 948.2 572.5 960 512 960s-119.2-11.8-174.4-35.2c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512s11.8-119.2 35.2-174.4c22.6-53.3 54.9-101.3 96-142.4s89.1-73.5 142.4-96C392.8 75.8 451.5 64 512 64m0-64C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z" fill="#3F5F51" p-id="1967"></path></svg>
                    <span className="text">点击查看无聊地图初心</span>
                </Link>
                <div className="point" ref={pointRef}/>

            </div>
            {
                lightInfo ?
                <div className="light-info">
                    <div className="info">
                        <p className="title">全国第<span>{lightInfo.countryNo}</span>个</p>
                        <p className="line" />
                        <div className="content">
                            <p>全省第<span>{lightInfo.provinceNo}</span>个</p>
                            <p>有<span>{lightInfo.sumAtSameTime}</span>个人和你同时点亮</p>
                            <p>{lightInfo.province}已有<span>{lightInfo.provinceSum}</span>个，排名第{lightInfo.provinceRank}</p>
                        </div>
                    </div>
                    <div className="share" onClick={() => {
                        showShareModal(true)
                    }}>
                        分享
                    </div>
                </div> : null
            }
            {
                isShowShareModal ? 
                <div className="m-modal" onClick={() => {
                    showShareModal(false)
                }}>
                    <div className="share-img">
                        <img src={`http://qr.liantu.com/api.php?text=${window.location.href}`} alt=""/>
                        <p>长按保存并分享无聊地图</p>
                        <p>坚守无聊 传递希望</p>
                    </div>    
                </div>
                : null
            }
        </div>
    );
}

export default Home;
