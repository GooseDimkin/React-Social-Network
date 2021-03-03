import style from './MiddleInfo.module.css';

function MiddleInfo(props) {
    return(
        <div>
            <div className={style.middle_info}>
                <ul className={style.labels}>
                    <li>Birthday:</li>
                    <li>Company:</li>
                    <li>Website:</li>
                </ul>
                <ul className={style.info}>
                    <li>{props.profileData.birthday}</li>
                    <li>{props.profileData.company}</li>
                    <li>{props.profileData.website}</li>
                </ul>
            </div>
            <div className={style.underline}/>
        </div>
    );
}

export default MiddleInfo;