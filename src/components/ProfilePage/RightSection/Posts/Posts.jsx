import style from './Posts.module.css';
import box_style from './../../../../box-template.module.css';
import React from 'react'

import PostElement from './PostElement/PostElement';

function Posts(props) {

    let ref = React.createRef();
    
    let inputUpdate = () => {
        let currentText = ref.current.value;
        props.inputUpdate(currentText);
    }

    let addPost = () => {
        props.addPost();
    }

    let postElement = props.posts.map(p => <PostElement text={p.text} />)

    return(
        <div className={style.posts_section}>
                <div className={box_style.box}>
                    <div className={style.post_input}>
                        <img src={props.avatar} alt='avatar'/>
                        <input onChange={inputUpdate} value={props.currentInputText} ref={ref} className={style.input} type='text' placeholder="What's new?"/>
                        <button onClick={addPost} className={style.send_button}>Send</button>
                    </div>
                </div>
                {postElement}
        </div>
    );
}

export default Posts;