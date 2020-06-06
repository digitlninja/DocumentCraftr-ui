import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ViewDocuments from '../modules/Documents/ViewDocuments';
import ViewDocument from '../modules/Documents/ViewDocument';
import EditDocument from '../modules/Documents/EditDocument';
import CreateDocument from '../modules/Documents/CreateDocument';
import ViewResources from '../modules/Resources/ViewResources';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ViewDocuments}/>
            <Route path='/documents/view' exact component={ViewDocuments}/>
            <Route path='/documents/view/:id' exact component={ViewDocument}/>
            <Route path='/documents/create' exact component={CreateDocument}/>
            <Route path='/documents/edit/:id' exact component={EditDocument}/>
            <Route path='/resources/view' exact component={ViewResources}/>
        </Switch>
    );
};

export default Routes;
