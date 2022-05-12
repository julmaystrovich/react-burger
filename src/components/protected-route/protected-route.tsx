import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { FC } from "react";

const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const { loggedIn } = useSelector((store) => store.auth);

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