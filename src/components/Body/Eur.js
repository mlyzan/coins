import React from 'react';
import BodyContainer from './BodyContainer';
import {connect} from 'react-redux';
import {getFullData} from '../../api/axios';
import {getAllCoinsAC} from '../../redux/action-creators';

class Eur extends React.Component{
    componentDidMount(){
        getFullData('EUR').then((data)=>{
            this.props.setAllCoins(data.Data)
        })
    }
    render(){
        return(
            <BodyContainer coins={this.props.coins}/>
        )
    }
}
let mapStateToPops = (state)=>{
    return{
        coins: state.coins.allCoins
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setAllCoins: (data) => dispatch(getAllCoinsAC(data))
    }
}
export default connect(mapStateToPops, mapDispatchToProps)(Eur);