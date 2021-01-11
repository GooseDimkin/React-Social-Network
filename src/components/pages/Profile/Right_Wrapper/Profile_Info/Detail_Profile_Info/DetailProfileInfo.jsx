import s from './DetailProfileInfo.module.css';

import React, {useState} from 'react';

function DetailProfileInfo(props) {

    const [show,setshow]=useState(false);

    return(
        <div>
            <div className={s.profile_information}>
                <div className={s.labels}>
                    <li>Birthday:</li>
                    <li>Company:</li>
                    <li>Website:</li>
                </div>
                <div className={s.info}>
                    <li><button className={s.button_link}>{props.birthday}</button></li>
                    <li><button className={s.button_link}>{props.company}</button></li>
                    <li><button className={s.button_link}>{props.website}</button></li>
                </div>
            </div>
            <div className={s.full_info_area}>
                <div className={s.full_info_button}>
                    <span onClick={()=>setshow(!show)}>Show full information</span>
                </div>
                {show?<div className={s.full_info}>Nani?</div>:null}
            </div>
            <div className={s.underline}></div>
        </div>
    );
}

export default DetailProfileInfo;