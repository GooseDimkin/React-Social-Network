import './App.css';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Messages from './components/Messages/Messages';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <body>
          <Header />
          <div className='wrapper'>
              <Nav />
              <Route path='/profile' component={() => <Profile profile_name='Дмитрий Лебедев' profile_status='Что-то типа статуса.' />} />
              <Route path='/messages' component={Messages} />
              <Route path='/news' component={News} />
          </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
