import s from './App.module.css';

import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';

import Profile from './components/pages/Profile/Profile';
import News from './components/pages/News/News';

import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <body>
          <Header/>
          <div className={s.content}>
            <Nav/>
            <Route path='/profile' render={() => <Profile state={props.state} dispatch={props.dispatch} />}/>
            <Route path='/news' render={() => <News profileData={props.state.ProfileData} dispatch={props.dispatch} />}/>
          </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
