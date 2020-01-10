import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo  = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.justrunlah.com/wp-content/uploads/2015/11/yoga-1.jpg" alt=""/>
            </div>
            <div className={s.descriptonBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;