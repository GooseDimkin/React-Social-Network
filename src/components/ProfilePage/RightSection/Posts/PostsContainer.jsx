import {connect} from 'react-redux';
import Posts from './Posts';
import {inputUpdateActionCreator, addPostActionCreator} from './../../../../Redux/Reducers/ProfilePageReducer';

const mapStateToProps = (state) => {
    return {
        avatar: state.profileData.avatar,
        posts: state.profileData.posts,
        currentInputText: state.profileData.currentInputText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inputUpdate: (currentText) => dispatch(inputUpdateActionCreator(currentText)),
//         addPost: () => dispatch(addPostActionCreator())
//     }
// }

let PostsContainer = connect(mapStateToProps, {addPostActionCreator, inputUpdateActionCreator})(Posts);

export default PostsContainer;