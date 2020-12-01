import './styles/App.css';

import './components/Header/Header.module.css';
import './components/Nav/Nav.module.css';
import './components/Profile/Profile.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';

function App() {
  return (
    <body>
      <div className='app_wrapper content'>
        <Header />
        <Nav />
        <Profile userName='Дмитрий Лебедев'/>
        <MyPosts />
      </div>
    </body>
  );
}

export default App;
