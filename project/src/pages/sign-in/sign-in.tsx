import { LogInState } from '../../const';
import Logo from '../../components/logo/logo';
import { logIn } from '../../store/api-actions';
import { Link, Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { handleError } from '../../services/error-handle';
import { FormEvent, useState, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginState } from '../../store/user-reducer/user-reducer';
import { resetMainScreen } from '../../store/main-reducer/main-reducer';
import { getAuthorizationStatus, getLoginState } from '../../store/user-reducer/user-selectors';

function SignIn(): JSX.Element {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginState = useAppSelector(getLoginState);

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
        dispatch(resetMainScreen());
        dispatch(logIn({email: emailField, password: passwordField}))
          .catch((err) => handleError(`Something went wrong. ${err.message}`));
      }
    }
  };

  const showErrMessage = (logInState: LogInState) => {
    switch (logInState) {
      case LogInState.NotValidEmail:
        return (
          <div className="sign-in__message">
            <p>Email is not correct</p>
          </div>
        );
      case LogInState.NotValidPassword:
        return (
          <div className="sign-in__message">
            <p>Password is not correct. He should contain at less 1 digit and 1 letter</p>
          </div>
        );
      case LogInState.NotValidEmailAndPassword:
        return (
          <div className="sign-in__message">
            <p>Email and password are not correct</p>
          </div>
        );
      default:
        return null;
    }
  };
  const errorMessage = useMemo(() => showErrMessage(loginState), [loginState]);

  if (authorizationStatus === AuthorizationStatus.Auth){
    return <Navigate to={'/'} />;
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
          {errorMessage}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid='user-email'
                value={emailField}
                onChange={(event) => setEmailField(event.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid='user-password'
                value={passwordField}
                onChange={(event) => setPasswordField(event.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
export default SignIn;
