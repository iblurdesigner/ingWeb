import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout';
import Inicio from '../pages/Inicio';
import Ponencias from '../pages/Ponencias';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import Agenda from '../pages/Agenda';
import NotFound from '../pages/NotFound';
import Expositores from '../pages/Expositores';

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/ponencias" component={Ponencias} />
                    <Route exact path="/expositores" component={Expositores} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/agenda" component={Agenda} />
                    <Route exact path="/registro" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App