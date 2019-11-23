import React from 'react';
import './app.scss';
import Header from '../Header/Header';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from '../../redux/store';
import Usd from '../Body/Usd';
import Eur from '../Body/Eur';
import Uah from '../Body/Uah';
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Provider store={store}>
                        <Header/>
                        <Route path="/" exact render={()=><Usd/>}/>
                        <Route path="/usd" render={()=><Usd/>}/>
                        <Route path="/eur" render={()=><Eur/>}/>
                        <Route path="/uah" render={()=><Uah/>}/>
                    </Provider>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;