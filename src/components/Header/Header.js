import React from 'react';
import './header.scss';
import Search from './Search';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {nullSearchAC, setFalseErrorAC} from '../../redux/action-creators';
class Header extends React.Component{
    nullSearch = ()=>{
        this.props.nullSearch()
    }
   render (){
    return(
        <header className="header">
            <Link to="/" className="header_link" onClick={()=>this.nullSearch()}><h1 className="header_title">Coins List</h1></Link>
            <div className="header__coins">
            <Link to="/usd" className="header_link"><div onClick={()=>this.nullSearch()} className="header__coins_usd">USD</div></Link>
            <Link to="/eur" className="header_link"><div onClick={()=>this.nullSearch()} className="header__coins_eur">EUR</div></Link>
            <Link to="/uah" className="header_link"><div onClick={()=>this.nullSearch()} className="header__coins_uah">UAH</div></Link>
            </div>
            <Search/>
        </header>
    )
   }
}
let mapStateToProps = ()=>{
    return{

    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        nullSearch: ()=> {
            dispatch(nullSearchAC());
            dispatch(setFalseErrorAC())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);