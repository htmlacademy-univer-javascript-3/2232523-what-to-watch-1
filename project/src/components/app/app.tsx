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
import {FilmType} from '../../types/film-type';

type AppProps = {
  films : FilmType[];
}

function App({films} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <WelcomeScreen
              mainFilm={films[0]}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film films={films}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={films[0]}/>}
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
