import logo from './logo.svg';
import style from './App.module.css'

import {BrowserRouter, Route} from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer'
import FriendsContainer from './components/Friends/FriendsContainer';

function App(props) {
  return (
    <BrowserRouter>
        <HeaderContainer/>
        <body>
          <div className={style.content}>
              <Nav />
              <Route path='/profile/:userId' render={()=> <ProfilePageContainer />} />
              <Route path='/friends' render={()=> <FriendsContainer />} />
          </div>
        </body>
    </BrowserRouter>
  );
}

export default App;
