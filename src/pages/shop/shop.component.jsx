import React, { Component } from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import { Route } from 'react-router-dom';
import CollectionContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

  
class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />

                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionContainer} 
                    />
            </div>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage); 