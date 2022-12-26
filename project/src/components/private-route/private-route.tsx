import {Navigate} from 'react-router-dom';
import { Reducer } from '../../const';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducer.USER_REDUCER].authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
