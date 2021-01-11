import s from './Posts.module.css';
import b from './../../../../box.module.css';

import PostItem from './Post_Item/PostItem';

function Posts(props) {
    return(
        <div className={b.box}>
            <PostItem postText={props.postText} profileData={props.profileData} />
        </div>
    );
}

export default Posts;