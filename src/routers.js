import React, { Profiler } from 'react';
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
import SignUp from './views/auth/signup';
import BoxesPage from './views/boxes';
import Sobre from './views/sobre';
import Profile from './views/perfil';
import Gerenciar from './views/gerenciar';
import Assinantes from './views/assinantes';
import Error404 from './views/errors/404.js';

import { isAuthenticated } from './config/auth';
import { useSelector } from 'react-redux';

const AdminRoute = ({ ...rest }) => {
   if(!isAuthenticated()) {
      return <Redirect to='/signin'></Redirect>
   }
   const hasAdmin = Object.keys(rest).includes('admin') && !rest.admin

   if(hasAdmin) {
      return <Redirect to='/'></Redirect>
   }
   
   return <Route {...rest}/>
}
const Routers = () => {
   const isAdmin = useSelector(state => state.auth.admin)

   return(
      <Router history={history}>
         <Layout>
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/signin' component={SignIn}/>
               <Route exact path='/signup' component={SignUp}/>
               <AdminRoute exact path='/boxes/:id' component={BoxesPage}/>
               <Route exact path='/sobre' component={Sobre}/>
               
               {/* LOGIN REQUIRED */}
               <AdminRoute exact path='/profile' component={Profile}/>
               {/* -------- */}

               {/* ADMIN */}
               <AdminRoute exact path='/gerenciar' admin={isAdmin} component={Gerenciar}/>
               <AdminRoute exact path='/assinantes' admin={isAdmin} component={Assinantes}/>
               {/* -------- */}

               <Route exact to='/error/404' component={Error404}/>
               <Redirect from='*' to='/error/404' />
            </Switch>
         </Layout>
      </Router>
   )
};

export default Routers;