import Loader from '../loader/loader';
import { AppRoute } from '../../const';
import Film from '../../pages/film/film';
import { Reducer } from '../../const';
import { useAppSelector } from '../../hooks';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NonExistentPage from '../../pages/non-existent-page/non-existent-page';

function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state[Reducer.MAIN_REDUCER].dataIsLoading);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
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
          element={<AddReview />}
        />
        <Route
          path="*"
          element={<NonExistentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
