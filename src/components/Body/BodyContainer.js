import React from 'react';
import {connect} from 'react-redux';
import Item from './Item/Item';
import Body from './Body';
import Preloader from '../Preloader/Preloader';
class BodyContainer extends React.Component {
    whatIsCurrent = (e)=>{
        if(e.DISPLAY.USD){
            return e.DISPLAY.USD
        }
        else if(e.DISPLAY.EUR){
            return e.DISPLAY.EUR
        } else if(e.DISPLAY.UAH){
            return e.DISPLAY.UAH
        }
    }
    renderCoinsList = ()=>{
        if(!this.props.coins){
            return (
                <Preloader/>
            )
        }
        else if(!this.props.searchCoins) {
            return  this.props.coins.map((e,i)=>{
                let {FullName, Name, ImageUrl} = e.CoinInfo;
                let {PRICE, TOTALVOLUME24HTO, TOTALTOPTIERVOLUME24HTO, 
                    CHANGEPCT24HOUR, MKTCAP, VOLUME24HOURTO}= this.whatIsCurrent(e);
                let number = i+1;
                  return (
                      <span key={i}>
                          <Item FullName={FullName} Name={Name} ImageUrl={ImageUrl} 
                          PRICE={PRICE} TOTALVOLUME24HTO={TOTALVOLUME24HTO}
                          TOTALTOPTIERVOLUME24HTO={TOTALTOPTIERVOLUME24HTO}
                          CHANGEPCT24HOUR={CHANGEPCT24HOUR} MKTCAP={MKTCAP}
                          VOLUME24HOURTO={VOLUME24HOURTO} number={number} />
                      </span>
                  )
              })
        }
        else{
            return  this.props.searchCoins.map((e,i)=>{
                let {FullName, Name, ImageUrl} = e.CoinInfo;
                let {PRICE, TOTALVOLUME24HTO, TOTALTOPTIERVOLUME24HTO, CHANGEPCT24HOUR, MKTCAP, VOLUME24HOURTO}= this.whatIsCurrent(e);
                let number = i+1;
                  return (
                      <span key={i}>
                          <Item FullName={FullName} Name={Name} ImageUrl={ImageUrl} 
                          PRICE={PRICE} TOTALVOLUME24HTO={TOTALVOLUME24HTO}
                          TOTALTOPTIERVOLUME24HTO={TOTALTOPTIERVOLUME24HTO}
                          CHANGEPCT24HOUR={CHANGEPCT24HOUR} MKTCAP={MKTCAP}
                          VOLUME24HOURTO={VOLUME24HOURTO} number={number} />
                      </span>
                  )
              })
        }

    }
    render(){
        return (
            <section className="body"> 
                <Body/>
                <hr/>
                {this.renderCoinsList()}
            </section>
        )
    }
}
let mapStateToProps = (state)=>{
    return{
        searchCoins: state.search.newAllCoins
    }
}
export default connect(mapStateToProps)(BodyContainer);