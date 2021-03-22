import {connect} from 'react-redux';
import {changePageActionCreator,
        getFriendsPageThunkCreator} from './../../Redux/Reducers/FriendsReducer';
import React from 'react';
import Friends from './Friends';
import Preloader from './../common/Preloader';
import style from './Friends.module.css';

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getFriendsPageThunkCreator(this.props.currentPageNumber, this.props.usersOnPageValue);
    }

    onChangePage = (pageNumber) => {
        this.props.changePageActionCreator(pageNumber);
        this.props.getFriendsPageThunkCreator(pageNumber, this.props.usersOnPageValue);
    }


    render() {
        let pagesValue = Math.ceil(this.props.allUsersValue / this.props.usersOnPageValue);
        let pagesArray = [];
        for(let i = 1; i <= pagesValue; ++i) {
            pagesArray.push(i);
        }

        let pages = pagesArray.map(p => <span onClick={(e) => {this.onChangePage(p)}} className={this.props.currentPageNumber === p ? style.selected : ''}>{p}</span>);

        return (
            <div>
                {this.props.showLoading ? <Preloader /> : <Friends friends={this.props.friendsData}
                         allUsersValue={this.props.allUsersValue}
                         usersOnPageValue={this.props.usersOnPageValue}
                         currentPageNumber={this.props.currentPageNumber}
                         changePageActionCreator={this.props.changePageActionCreator}
                         pages={pages}
                 />} 
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsData.friendsArray,
        showLoading: state.friendsData.showLoading,
        allUsersValue: state.friendsData.allUsersValue,
        usersOnPageValue: state.friendsData.usersOnPageValue,
        currentPageNumber: state.friendsData.currentPageNumber,
    }
}

const FriendsContainer = connect(mapStateToProps, { 
     changePageActionCreator,
     getFriendsPageThunkCreator
})(FriendsAPIContainer);

export default FriendsContainer;