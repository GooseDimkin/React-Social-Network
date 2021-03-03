import style from './LabelComponent.module.css';

function LabelComponent(props) {
    return(
        <div className={style.label_component}>
            <div className={style.value}>{props.value}</div>
            <div className={style.label}>{props.label}</div>
        </div>
    );
}

export default LabelComponent;