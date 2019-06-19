import React from 'react';
import {withRouter} from 'react-router-dom';

function withAuth(Component){
    const Auth = (props) => {
        const isAuth = Boolean(localStorage.getItem('token'))
        
        return isAuth ? <Component {...props} /> : <div><h3>You are not authorized</h3></div>
    }

    return withRouter(Auth)
}

export default withAuth