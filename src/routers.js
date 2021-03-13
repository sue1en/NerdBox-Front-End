import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//Views
import Home from './views/home';
import Inscricao from './views/inscricao';
// import Boxes from './views/boxes';

// componentes basicos
import Layout from './components/layout';


const Routers = () => {
    return(
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/inscricao' component={Inscricao}/>
                    {/* <Route exact path='/boxes' component={Boxes}/> */}
                </Layout>
            </Switch>
        </Router>
    )
};

export default Routers;