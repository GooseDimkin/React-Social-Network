import s from './NewsItem.module.css';

function NewsItem(props) {
    return(
        <div className={s.news_section}>
            <div className={s.community_info}>
                <img src = {props.groupPicture} alt='group' />
                <div className={s.community_name}>{props.communityName}</div>
            </div>
            <div className={s.news_text}>{props.newsText}</div>
            <div className={s.post_image}><img src={props.postImage} /></div>
        </div>
    );
}

export default NewsItem;