import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component:Component, ...rest }) => { 

    return (<>
   <h1>Hello </h1>
        <Route
            {...rest}
            render={props => 
                localStorage.getItem("token") ? ( 
                    
                     <Component {...props} />
                ) : (
                    <h1>Redirect</h1>
                    // <Redirect to="/login" />
                )
            }
        />
    </>)
}


export default PrivateRoute;