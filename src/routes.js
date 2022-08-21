import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Home from './containers/home';
import App from './components/app';
import Contact from './containers/contact';
import About from './containers/about';
import PageTwo from './containers/page_two';
import PageOne  from './containers/page_one';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pageOne" component={PageOne}/>
    <Route path="pageTwo" component={PageTwo}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
  </Route>
);
