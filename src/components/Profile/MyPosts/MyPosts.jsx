import s from './MyPosts.module.css';

import Post from './Posts/Post';

function MyPosts() {
    return(
        <div className={s.posts}>
            My posts
            <hr />
            <Post text='Pls stop spaming!' id='owner'/>
            <Post text='Allahu Akbar' />
            <Post text='Lol Kek Cheburek'/>
            <Post text='I like ya cut G'/>
            <Post text='Alabama'/>
        </div>
    );
}

export default MyPosts;