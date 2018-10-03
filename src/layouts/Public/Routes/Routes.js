import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Collection, About, NotFound } from './lazy';

const routes = props => {
    const { width, category, } = props;

    return (
        <Switch>
            <Route 
                path="/" 
                exact 
                render={props => <Home {...props} width={width} category={category} />} />
            <Route 
                path="/about" 
                exact 
                component={About} />
            <Route 
                path="/collection/flora" 
                exact 
                render={props => <Collection {...props} width={width} />} />
            <Route 
                path="/collection/vertebrata" 
                exact 
                render={props => <Collection {...props} width={width} />} />
            <Route 
                path="/collection/invertebrata" 
                exact 
                render={props => <Collection {...props} width={width} />} />
            <Route 
                path="/collection/batuan" 
                exact 
                render={props => <Collection {...props} width={width} />} />
            <Route 
                path="/collection/artefak" 
                exact 
                render={props => <Collection {...props} width={width} />} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default routes;