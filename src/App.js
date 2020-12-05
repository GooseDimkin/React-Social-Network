import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Nav from './components/Nav';
import MyPosts from './components/MyPosts/MyPosts';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <body>
          <Header />
          <div className='wrapper'>
              <Nav />
              <Route path='/profile' component={Profile} />
              <Route path='/posts' component={MyPosts} />
          </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
