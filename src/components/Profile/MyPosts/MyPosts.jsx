import s from './MyPosts.module.css';

import Post from './Posts/Post';

function MyPosts() {
    return(
        <div className={s.posts}>
            My posts
            <hr />
            <Post text='Pls stop spaming!' likes='228' id='owner' userName='Дмитрий Лебедев' />
            <Post text='Allahu Akbar' likes='0' userName='No name' />
            <Post text='Lol Kek Cheburek' likes='11' userName='No name' />
            <Post text='I like ya cut G'likes='2' userName='No name' />
            <Post text='Alabama' likes='0' userName='No name' />
        </div>
    );
}

export default MyPosts;