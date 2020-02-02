import React, { useState, useEffect } from 'react';
import { fetchRankData } from '../fetch';
import Header from '../component/header';
import './index.css';

function Rank(props) {
	const [ data, setData ] = useState(null);
	
	useEffect(() => {
		fetchRankData().then(d => {
			setData(d)
		})
	}, [])

	if (data === null) {
		return null
	}

	return (
		<div className="m-page">
			<Header onLeft={() => {
				props.history.goBack();
			}}/>
			<div className="m-rank">
				<div className="first">
					{data.rankData[0].province}无聊指数一名
				</div>
				<div className="current">
					<span>{data.province}无聊指数第{data.provinceNo}名</span>
					<span className="num">{data.provinceSum}</span>
				</div>
				<div className="list">
					{
						data.rankData.map((item, index) => {
							let className = 'order'
							if (index < 3) {
								className += ' highlight'
							}
							return (
							<div className="item">
								<span className={className}>{index + 1}</span>
								<span className="province">{item.province}</span>
								<span>{item.provinceSum}</span>
							</div>
						)})
					}
				</div>
			</div>
		</div>
	);
}

export default Rank;
