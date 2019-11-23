import React from 'react';
import './preloader.scss';
import preloader from '../../img/preloader.svg';
const Preloader = ()=>{
    return(
        <img className="preloader_img" src={preloader} alt="spinner"/>
    )
}
export default Preloader;