import React from 'react';
import {
   Router,
   Switch,
   Route,
   Redirect
} from 'react-router-dom';
import history from './config/history'

// Layout
import Layout from './components/layout';

//Views
import Home from './views/home';
import SignIn from './views/auth/signin';
import BoxesPage from './views/boxes';
import Sobre from './views/sobre';
import Error404 from './views/errors/404.js';

import { isAuthenticated } from './config/auth'
const AdminRoute = ({ ...rest }) => {
   if(!isAuthenticated()) {
      return <Redirect to='/signin'></Redirect>
   }
   return <Route {...rest}/>
}
const Routers = () => {
   return(
      <Router history={history}>
         <Layout>
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/signin' component={SignIn}/>
               <Route exact path='/boxes/:id' component={BoxesPage}/>
               <AdminRoute exact path='/sobre' component={Sobre}/>
               <Route exact to='/error/404' component={Error404}/>
               <Redirect from='*' to='/error/404' />
            </Switch>
         </Layout>
      </Router>
   )
};

export default Routers;