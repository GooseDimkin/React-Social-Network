import style from './TopInfo.module.css'

function TopInfo(props) {
    return(
        <div className={style.top_info}>
            <div className={style.name_and_online_flex}>
                <span className={style.name}>{props.profileData.name}</span>
                <div className={style.online}>online</div>
            </div> 
            <div className={style.status}>{props.profileData.status}</div>
            <div className={style.underline}/>
        </div>
    );
}

export default TopInfo;