import React from 'react';
import Header from '../component/header';

function Intro(props) {
    console.log(props)
    return (
        <div className="m-page">
            <Header onLeft={() => {
                props.history.goBack()
            }} />
            <div style={{
                padding: '.4rem .25rem',
                flex: '1',
                height: '.1px',
                overflow: 'scroll'
            }}>
                <img style={{
                    width: '100%',
                    //   margin: '.5rem .25rem',
                }} src="http://localhost:5000/WX20200202-124217@2x.png" alt=""/>
            </div>
        </div>
    );
}

export default Intro;
