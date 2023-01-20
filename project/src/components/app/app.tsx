import Loader from '../loader/loader';
import { AppRoute } from '../../const';
import Film from '../../pages/film/film';
import { useAppSelector } from '../../hooks';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import { Route, Routes } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { getIsDataLoading } from '../../store/main-reducer/main-selectors';
import NonExistentPage from '../../pages/non-existent-page/non-existent-page';

function App(): JSX.Element {
  const isLoading = useAppSelector(getIsDataLoading);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<WelcomeScreen />}
      />
      <Route
        path={AppRoute.Film}
        element={<Film/>}
      />
      <Route
        path={AppRoute.Player}
        element={<Player />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyList/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NonExistentPage />}
      />
    </Routes>
  );
}

export default App;
