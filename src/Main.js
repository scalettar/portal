import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component"
import ArticlesPage from './pages/articles-page/articles-page.component'
import ProjectsPage from './pages/projects-page/projects-page.component'

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Daniel Scalettar</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={HomePage}/>
            <Route path="/articles" component={ArticlesPage}/>
            <Route path="/projects" component={ProjectsPage}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
