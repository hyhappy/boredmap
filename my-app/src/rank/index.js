import React, { useState, useEffect } from 'react';
import { fetchRankData } from '../fetch';
import Header from '../component/header';
import Toast from '../component/toast';
import { getLocation } from '../util';
import Loading from '../component/loading';
import './index.css';

function Rank(props) {
    const [ data, setData ] = useState(null);
	
	useEffect(() => {
        Loading.show();
        getLocation().then(data => {
            fetchRankData(data).then(d => {
                if (d.rankData) {
                    setData(d)
                } else {
                    Toast.show('获取坚守榜数据失败，请稍后重试')
                }
            }).catch(() => {
                Toast.show('获取坚守榜数据失败，请稍后重试')
            })
        }).catch(() => {
            Toast.show('获取地理位置失败')
            Loading.hide();
        })
		
	}, [])

	return (
		<div className="m-page m-rank">
			<Header onLeft={() => {
				props.history.goBack();
			}}/>
			<div className="m-rank-cont">
                <img className="header-img" src="http://qdev.qunar.com:5000/image/ico_rank_bg.png" alt=""/>
                {
                    data?
                    <>
                    <div className="current">
                        <span>您所在的{data.province}当前坚守指数第<span style={{color:'#EC6B61'}}>{data.provinceNo}</span>名</span>
                        <span className="num">{data.provinceSum}</span>
                    </div>
				<div className="list">
					{
						data.rankData.map((item, index) => {
							return (
							<div className="item">
                                <span className="order">{
                                    index<3?<img src={`http://qdev.qunar.com:5000/image/ico_rank_num${index+1}.png`} alt=""/>:(index+1)}</span>
                                
								<span className="province">{item.province}</span>
								<span className="num">{item.provinceSum}</span>
							</div>
						)})
					}
				</div>
                    </>: null
                }
				
			</div>
		</div>
	);
}

export default Rank;
