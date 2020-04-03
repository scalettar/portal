import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import ArticlesPage from './pages/articles-page/articles-page.component';
import AboutPage from './pages/about-page/about-page.component';
import Header from './components/function-header/function-header.component';

import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/articles" component={ArticlesPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </HashRouter>
        );
    }
}

export default Main;
