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
                paddingTop: '.2rem',
            }}>
                <img style={{
                    width: '100%',
                    //   margin: '.5rem .25rem',
                }} src="http://localhost:5000/image/ico_intro.png" alt=""/>
            </div>
        </div>
    );
}

export default Intro;
