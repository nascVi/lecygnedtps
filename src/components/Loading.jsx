import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function loading() {
    return (
        <div className="loading">
            {/*o-t-w-dish (n the way)*/}
            <h4>products records are on the way...</h4>
            <img src={loadingGif} alt="loading-arr"/>
        </div>
    )
}
