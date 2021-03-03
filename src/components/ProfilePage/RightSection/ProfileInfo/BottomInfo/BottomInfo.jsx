import style from './BottomInfo.module.css';

import LabelComponent from './LabelComponent/LabelComponent'

function BottomInfo(props) {

    let labelcomponent = props.profileData.totalInfo.map(t => <LabelComponent value={t.value} label={t.label} />);

    return(
        <div className={style.bottom_info}>
            {labelcomponent}
        </div>
    );
}

export default BottomInfo;