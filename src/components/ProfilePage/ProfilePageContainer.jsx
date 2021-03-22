import React from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import { withRouter } from "react-router-dom";
import {addProfileDataActionCreator, showLoadingAC, getUserDataThunkCreator} from './../../Redux/Reducers/ProfilePageReducer'
// import UsersAPI from './../../api/api';
import Preloader from './../common/Preloader';

class ProfilePageAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserDataThunkCreator(userId);
    }
    render() {
        return ( 
            <div>
                {this.props.showLoading ? <Preloader /> : <ProfilePage profileData={this.props.profileData}/>} 
            </div>)
    }
}

let withProfilepageContainer = withRouter(ProfilePageAPI);

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData,
        showLoading: state.profileData.showLoading
    }
}

let ProfilePageContainer = connect(mapStateToProps, {addProfileDataActionCreator, showLoadingAC, getUserDataThunkCreator})(withProfilepageContainer);

export default ProfilePageContainer;