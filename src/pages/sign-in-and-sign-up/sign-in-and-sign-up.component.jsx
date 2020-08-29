import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import signUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPAge = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPAge;