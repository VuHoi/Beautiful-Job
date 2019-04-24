import React from 'react';
import Login from '../components/account/Login';
import Navigation from '../components/account/Navigation';
import { SimpleFooter } from '../components/common/SimpleFooter';

export const LoginPage = (props:any) => {
    return (
        <div>
            <Navigation />
            <Login />
            <SimpleFooter />
        </div>
    );
};