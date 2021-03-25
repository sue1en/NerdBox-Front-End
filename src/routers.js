import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} from 'react-router-dom';

// Layout
import Layout from './components/layout';

//Views
import Home from './views/home';
import BoxesPage from './views/boxes';
import Sobre from './views/sobre';
import Error404 from './views/errors/404.js';

const Routers = () => {
   return(
      <Router>
         <Switch>
            <Layout>
               <Route exact path='/' component={Home}/>
               <Route exact path='/boxes/:id' component={BoxesPage}/>
               <Route exact path='/sobre' component={Sobre}/>
               <Router exact to='/error/404' component={Error404}/>
               <Redirect from='*' to='/error/404' />
            </Layout>
         </Switch>
      </Router>
   )
};

export default Routers;