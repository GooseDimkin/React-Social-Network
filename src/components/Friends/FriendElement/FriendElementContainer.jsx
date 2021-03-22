import { connect } from 'react-redux';
import FriendElement from './FriendElement';

let mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile
    }
}

let FriendElementContainer = connect(mapStateToProps, setProfileActionCreator)(FriendElement);

export default FriendElementContainer;