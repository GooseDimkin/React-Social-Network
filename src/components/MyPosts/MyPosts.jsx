import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return(
        <div className={s.postsArea}>
            <div className={s.posts}>
                <Post post_text='Вот дурка блин' user_name='Валерий Жиган' />
                <Post post_text='Pogchump' user_name='Дмитрий Лебедев' id='owner' />
            </div>
            <div className={s.inputArea}>
                <input />
                <div className={s.button}>Send</div>
            </div>
        </div>
    );
}

export default MyPosts;