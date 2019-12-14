import React from 'react';
import not_found from '../../../img/not-found.png';
import './not_found.scss';
const NotFound = ()=>{
    return(
        <div className="not-found">
           <img src={not_found} alt="not-found"/>
        </div>

    )
}
export default NotFound;