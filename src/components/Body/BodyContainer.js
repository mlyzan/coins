import React from 'react';
import {connect} from 'react-redux';
import Item from './Item/Item';
import Body from './Body';
import Preloader from '../Preloader/Preloader';
import NotFound from '../Header/NotFound/NotFound';
import Error from '../Error/Error';
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
        if(!this.props.coins && !this.props.error){
            return (
                <Preloader/>
            )
        }
        else if(!this.props.searchCoins && !this.props.error) {
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
        } else if(this.props.error){
            return <Error/>
        }else if(this.props.searchCoins.length < 1 && this.props.text && !this.props.error){
            return <NotFound/>
        }else{
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
        searchCoins: state.search.newAllCoins,
        text: state.search.searchText, 
        error: state.coins.error 
    }
}
export default connect(mapStateToProps)(BodyContainer);