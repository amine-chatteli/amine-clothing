import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPAge from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    //setting our local state to user state provided by firebase subscription
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //get a snapchot object containing the current data in the database, in casea new user signs in
        userRef.onSnapshot(snapshot => {
          this.setState({
            id: snapshot.id,
            ...snapshot.data()
          })
            console.log(this.state);
        })
      }
      this.setState({ currentUser: userAuth })
    });
  }
  componentWillUnmount() {
    //close firebase subscription to avoid memory leaks
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPAge} />

        </Switch>
      </div>
    );
  }
}

export default App;
