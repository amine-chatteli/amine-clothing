import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Switch, Router } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div>

        <Route
            exact
            path={`${match.path}/`}
            component={CollectionsOverview} />

        <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPage} />

    </div>
)




export default ShopPage;