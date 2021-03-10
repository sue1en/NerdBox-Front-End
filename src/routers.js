import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

//Views
import Produtos from './views/produtos';

// componentes basicos
import Layout from './components/layout';


const Routers = () => {
    return(
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Produtos}/>
                </Layout>
            </Switch>
        </Router>
    )
};

export default Routers;