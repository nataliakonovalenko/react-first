import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo  = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptonBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status="Hello my friend" />
                {/*<div>Name: {props.profile.fullName}</div>
                <div>About: {props.profile.aboutMe}</div>
                <div>Looking for a job: {props.profile.lookingForAJob === true ? 'Yes' : 'No'}</div>
                <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
                <div>Contacts:
                    <ul>
                        <li><NavLink to={props.profile.contacts.facebook}>facebook</NavLink></li>
                        <li><NavLink to={props.profile.contacts.vk}>vk</NavLink></li>
                        <li><NavLink to={props.profile.contacts.instagram}>instagram</NavLink></li>
                        <li><NavLink to={props.profile.contacts.twitter}>twitter</NavLink></li>
                    </ul>
                </div>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;