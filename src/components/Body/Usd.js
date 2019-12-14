import React from 'react';
import BodyContainer from './BodyContainer';
import {connect} from 'react-redux';
import {getFullData} from '../../api/axios';
import {getAllCoinsAC, setErrorAC} from '../../redux/action-creators';

class Usd extends React.Component{
    componentDidMount(){
        getFullData('USD').then((data)=>{
            if(!data.Response ){
                this.props.setAllCoins(data.Data)
            } else {
               this.props.setError()
            }
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
        setAllCoins: (data) => dispatch(getAllCoinsAC(data)),
        setError: () => dispatch(setErrorAC())
    }
}
export default connect(mapStateToPops, mapDispatchToProps)(Usd);