import React from 'react';
import './item.scss';
const Item = (props) =>{
    let {FullName, Name, ImageUrl, PRICE,
         TOTALVOLUME24HTO, TOTALTOPTIERVOLUME24HTO,
          CHANGEPCT24HOUR, MKTCAP, VOLUME24HOURTO, number} = props;
          let percentClass = CHANGEPCT24HOUR > 0 ? "green" :"red";
    return(
        <div className="item">
            <div className="br item_number">{number}</div>
            <div className="br item_coin">
                <div className="item_coin_img"><img src={`https://www.cryptocompare.com/${ImageUrl}`} alt="coin-logo"/></div>
                <div className="item_coin_block-name">
                    <div className="item_coin-fullname">{FullName}</div> 
                    <div className="item_coin-name">{Name}</div>
                </div>
            </div>
            <div className="br item_price"><div className="item_price_overlay">{PRICE}</div></div>
            <div className="br item_vol">{VOLUME24HOURTO}</div>
            <div className="br item_vol">{TOTALVOLUME24HTO}</div>
            <div className="br item_vol">{TOTALTOPTIERVOLUME24HTO}</div>
            <div className="br item_vol">{MKTCAP}</div>
            <div className="item_chg"><div className={`item_chg_overlay ${percentClass}`}>{CHANGEPCT24HOUR}%</div></div>
        </div>
    )
}
export default Item;