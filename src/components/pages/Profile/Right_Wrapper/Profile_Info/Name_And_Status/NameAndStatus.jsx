import s from './NameAndStatus.module.css';

function NameAndStatus(props) {
    return(
        <div className={s.name_and_status}>
            <div>
                <div className={s.profileName}>
                    {props.profileName}
                </div> 
                <div className={s.profileStatus}>
                    {props.profileStatus}
                </div>
            </div>
            <div className={s.online}>
                online
            </div>
        </div>
    );
}

export default NameAndStatus;