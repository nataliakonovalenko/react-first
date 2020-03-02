import React from 'react';
import preloaderImg from "../../../assets/images/preloader.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return <><img src={preloaderImg} className={s.preloadImg} /></>
}

export default Preloader;