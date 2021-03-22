import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthProfileThunkCreator} from './../../Redux/Reducers/AuthReducer';

class HeaderContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getAuthProfileThunkCreator();
    }
    
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        logo: state.commonData.logo,
        userLogin: state.auth.login,
        isLoginned: state.auth.isLoginned
    }
}

let HeaderContainer = connect(mapStateToProps, {getAuthProfileThunkCreator})(HeaderContainerAPI);
export default HeaderContainer;