import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import Collection from './collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading:state=> !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection);

export default CollectionContainer;