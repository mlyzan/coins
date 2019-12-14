import React from 'react';
import './header.scss';
import {connect} from 'react-redux';
import {addSearchTextAC, addNewAllCoinsAC} from '../../redux/action-creators';
import search from '../../img/search.svg';
class Search extends React.Component{
    filterItems = async (e)=> {
           if(this.props.allCoins){
                let inputValue = e.target.value.trim().toUpperCase();
                await this.props.addText(inputValue);
                let newAllCoins = await this.props.allCoins.filter((e)=>{
                    return  e.CoinInfo.Name.indexOf(this.props.text) >= 0
                });
                await this.props.addNewAllCoins(newAllCoins)
           }
    }
    render(){
        return(
            <div className="header_search">
                <img src={search} alt="" className="header_search_icon"/>
                <input placeholder="BTC" autoFocus type="text" value={this.props.text} onChange={(e)=> this.filterItems(e)} />
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return {
        text: state.search.searchText,
        allCoins: state.coins.allCoins
    }
}
let  mapDispatchToProps= (dispatch)=>{
    return {
        addText: (payload)=>{
            dispatch(addSearchTextAC(payload))
        },
        addNewAllCoins: (payload)=>{
            dispatch(addNewAllCoinsAC(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);