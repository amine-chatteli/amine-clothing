import React, { Component, component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Switch, Router } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends Component {

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot=>{
            convertCollectionsSnapshotToMap(snapshot)
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverview} />

                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage} />

            </div>
        )
    }

}




export default ShopPage;