import React from 'react';
import { Route, Redirect } from 'react-router';
import { useCookies } from 'react-cookie';
interface Value {
    Comp: any;
    path: string;
    rest?: any;
}
export const ProtectedRoute: React.SFC<Value> = ({ Comp, path, rest }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['qid']);

    return (
        <Route
            exact
            path={path}
            {...rest}
            render={props => {
                return cookies.qid ? (
                    <Comp {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    prevLocation: path,
                                    error: "You need to login first!",
                                },
                            }}
                        />
                    );
            }}
        />
    );
};