import s from './MediaStatistic.module.css';

import MediaStatisticItem from './Media_Statistic_Item/MediaStatisticItem'

function MediaStatistic(props) {

    let profileStatistic = props.profileData.ProfileStatisticData.map(s => <MediaStatisticItem label={s.label} value={s.value} />)

    return(
        <div className={s.media_statistic_area}>
            {profileStatistic}
        </div>
    );
}

export default MediaStatistic;