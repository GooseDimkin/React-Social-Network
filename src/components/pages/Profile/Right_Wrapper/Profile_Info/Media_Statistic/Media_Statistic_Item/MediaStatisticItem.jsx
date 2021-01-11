import s from './MediaStatisticItem.module.css';

function MediaStatisticItem(props) {
    return(
        <div className={s.media_statistic_item}>
            <div className={s.value}>
                {props.value}
            </div>
            <div className={s.label}>
                {props.label}
            </div>
        </div>
    );
}

export default MediaStatisticItem;