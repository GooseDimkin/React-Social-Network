import s from './MyPosts.module.css';

import Post from './Posts/Post';

function MyPosts() {
    return(
        <div className={s.posts}>
            My posts
            <hr />
            <Post text='Pls stop spaming!' likes='228' id='owner'/>
            <Post text='Allahu Akbar' likes='0'/>
            <Post text='Lol Kek Cheburek' likes='11' />
            <Post text='I like ya cut G'likes='2' />
            <Post text='Alabama' likes='0' />
        </div>
    );
}

export default MyPosts;