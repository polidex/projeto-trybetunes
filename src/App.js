import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ (props) => <Login { ...props } /> } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites"><Favorites /></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route path="/profile/edit"><ProfileEdit /></Route>
          <Route path="/search"><Search /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
