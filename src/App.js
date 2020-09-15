import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPAge from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect, useStore } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout.componet';
import CollectionOverview from './components/collections-overview/collections-overview.component';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

   unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser} = this.props;
    //setting ourstate to user state provided by firebase subscription with setCurrentUser action
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //get a snapchot object containing the current data in the database, in casea new user signs in
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })

        })
      }
      setCurrentUser(userAuth);
     
    });
  }
  componentWillUnmount() {
    //close firebase subscription to avoid memory leaks
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={() =>
            this.props.currentUser ?
              (<Redirect to='/' />)
              :
              <SignInAndSignUpPAge />} />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
