import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Film from '../../pages/film/film';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NonExistentPage from '../../pages/non-existent-page/non-existent-page';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';

type WelcomeScreenProps = {
  name: string;
  genre: string;
  date: string;
}

function App({name, genre, date} : WelcomeScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen name={name} genre={genre} date={date}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
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
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
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
