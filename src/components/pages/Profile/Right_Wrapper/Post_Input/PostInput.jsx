import s from './PostInput.module.css';
import b from './../../../../box.module.css';

import React from 'react';

function PostInput(props) {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
        props.dispatch({type: 'ADD-CURRENT-INPUT-TEXT'});
    }

    let onPostUpdate = () => {
        let currentText = newPostElement.current.value;
        props.dispatch({type: 'ADD-CURRENT-INPUT-TEXT', currentText: currentText});
    }
    
    return(
        <div className={b.box}>
            <div className={s.post_input_section}>
                <img src={props.profileAvatar} alt='avatar'/>
                <input onChange={onPostUpdate} value={props.CurrentInputText} ref={newPostElement} type='text' placeholder="What's new?" />
                <a onClick={addPost} className={s.post_button}>Post</a>
            </div>
        </div>
    );
}

export default PostInput;