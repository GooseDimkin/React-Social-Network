import logo from './logo.svg';
import style from './App.module.css'

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Friends from './components/Friends/Friends';

function App(props) {
  return (
    <BrowserRouter>
        <Header logo={props.store.getState().siteData.logo} />
        <body>
          <div className={style.content}>
              <Nav />
              <Route path='/profile' render={()=> <ProfilePage state={props.store.getState()} />} />
              <Route path='/friends' render={()=> <Friends friendsData={props.store.getState().friendsData} />} />
          </div>
        </body>
    </BrowserRouter>
  );
}

export default App;
