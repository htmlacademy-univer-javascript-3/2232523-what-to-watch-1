import { useNavigate, Link } from 'react-router-dom';
import { FormEvent, useState, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logIn } from '../../store/api-actions';
import { Reducer } from '../../const';
import { LogInState } from '../../const';
import { setLoginState } from '../../store/user-reducer';

function SignIn(): JSX.Element {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state[Reducer.USER_REDUCER].authorizationStatus);
  const loginState = useAppSelector((state) => state[Reducer.USER_REDUCER].loginState);

  const formRef = useRef(null);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    const rePassword = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
    const reEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const isEmailCorrect = () => emailField === null || !reEmail.test(emailField);
    const isPasswordCorrect = () => passwordField === null || !rePassword.test(passwordField);

    evt.preventDefault();
    if (formRef.current) {
      if (isEmailCorrect() && isPasswordCorrect()) {
        dispatch(setLoginState(LogInState.NotValidEmailAndPassword));
      } else if (isEmailCorrect()) {
        dispatch(setLoginState(LogInState.NotValidEmail));
      } else if (isPasswordCorrect()) {
        dispatch(setLoginState(LogInState.NotValidPassword));
      } else {
        dispatch(logIn({email: emailField, password: passwordField}));
      }
    }
  };

  const showErrMessage = (logInState: LogInState) => {
    switch (logInState) {
      case LogInState.NotValidEmail:
        return (<p>Email не корректный</p>);
      case LogInState.NotValidPassword:
        return (<p>Пароль не корректный: он должен содержать как минимум 1 цифру и 1 букву</p>);
      case LogInState.NotValidEmailAndPassword:
        return (<p>Email и пароль не корректные</p>);
      default:
        return null;
    }
  };
  const errorMessage = useMemo(() => showErrMessage(loginState), [loginState]);

  if (authorizationStatus === AuthorizationStatus.Auth){
    navigate(AppRoute.Main);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" ref={formRef} onSubmit={submitHandler}>
          <div className="sign-in__message">
            {errorMessage}
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={emailField} onChange={(event) => setEmailField(event.target.value)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"id="user-password" value={passwordField} onChange={(event) => setPasswordField(event.target.value)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={'/'} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default SignIn;
