import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.component';
import CollectionPage from '../../pages/collection/collection.component';
import { Route, Switch,Router } from 'react-router-dom';
import {selectCollections} from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections,match }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id}{...otherCollectionProps} />
            ))
        }
         <Route  path={`${match.path}/:hi`} component={CollectionPage} />
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview)