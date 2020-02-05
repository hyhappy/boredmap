import React from 'react';

export default function(props) {
    return (
        <div className="m-header" style={{
            height: '.44rem',
        }}>
            <span
                style={{
                    display: 'inline-block',
                    // width: '.2rem',
                    margin: '.1rem 0 0 .1rem',
                    background: 'url(http://localhost:5000/image/back.png)',
                    width: '.3rem',
                    height:'.3rem',
                    backgroundSize:'100%'
                }}
                onClick={props.onLeft}
            >
            </span>
        </div>
    )
}