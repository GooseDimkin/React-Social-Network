import style from './LeftSection.module.css'

import Avatar from './Avatar/Avatar'

function LeftSection(props) {
    return(
        <div className={style.left_section}>
            <Avatar avatar={props.avatar} />
        </div>
    );
}

export default LeftSection