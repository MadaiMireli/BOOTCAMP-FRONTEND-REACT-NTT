import { Navigate } from "react-router";
import { LocalStorageKeys } from "../constants";
import { RoutePages } from "../routes";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const token = localStorage.getItem(LocalStorageKeys.token);

    if (!token) {
      return <Navigate to={RoutePages.Auth} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
