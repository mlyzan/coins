import React from 'react';
import './body.scss';

const Body = ()=>{
    return(
        <div className="body__up">
            <div className="number">#</div>
            <div className="coin">Coin</div>
            <div className="price">Price</div>
            <div className="vol">Direct Vol.</div>
            <div className="vol">Total Vol.</div>
            <div className="vol">Top Tier Vol.</div>
            <div className="cap">Market Cap</div>
            <div className="chg">Chg.24H</div>
        </div>
    )
}
export default Body;