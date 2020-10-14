import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

import OMap from './pages/OMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;