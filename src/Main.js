import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component"
import ArticlesPage from './pages/articles-page/articles-page.component'
import TechnicalPage from './pages/technical-page/technical-page.component'
import FunctionMenu from './components/function-menu-toggle/function-menu-toggle.component'

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <FunctionMenu />
          <h1>Daniel Scalettar</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/technical">Technical</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/articles" component={ArticlesPage}/>
            <Route path="/technical" component={TechnicalPage}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
