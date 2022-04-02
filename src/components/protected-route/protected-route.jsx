import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, ...rest }) {
    const { loggedIn } = useSelector(store => store.auth);

    return (
        <Route
            {...rest}
            render={({ location }) => (
                loggedIn
                ? (children)
                : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
            )}
        />
    );
}

export default ProtectedRoute;