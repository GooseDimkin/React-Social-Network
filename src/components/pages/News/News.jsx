import s from './News.module.css';

import PostInput from '../Profile/Right_Wrapper/Post_Input/PostInput';
import NewsItem from './News_Item/NewsItem';
function News(props) {

    let newsItem = props.profileData.NewsData.map(n => <NewsItem postText={n.postText} profileData={props.profileData} />)

    return(
        <div>
            <PostInput addCurrentInputText={props.addCurrentInputText} CurrentInputText={props.profileData.CurrentInputText} addPost={props.addPost} profileAvatar={props.profileData.profileAvatar}/>
            {newsItem}
        </div>
    );
}

export default News;