import React from 'react';
import { Route } from 'react-router';
import { useCookies } from 'react-cookie';
import IntroducePage from '../../pages/Introduce';
import { HomePage } from '../../pages/Home';

export const BlankRoute: React.SFC = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['qid']);

    return (
        <Route
            exact
            path='/'
            render={props => {
                return cookies.qid ? (
                    <HomePage />
                ) : <IntroducePage />
            }}
        />
    );
};