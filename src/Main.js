import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component"
import ArticlesPage from './pages/articles-page/articles-page.component'
import PersonalPage from './pages/personal-page/personal-page.component'
import ProjectsPage from './pages/projects-page/projects-page.component'
import TechnicalPage from './pages/technical-page/technical-page.component'
import FunctionMenu from './components/function-menu-toggle/function-menu-toggle.component'

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <FunctionMenu />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/technical" component={TechnicalPage}/>
          <Route path="/personal" component={PersonalPage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/articles" component={ArticlesPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;
