import React from 'react';
import { logOut } from '../../store/api-actions';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAvatar, getAuthorizationStatus } from '../../store/user-reducer/user-selectors';

function User(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const avatar = useAppSelector(getAvatar);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const signOutClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logOut());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to='/login' className='user-block__link' data-testid='login-link'>Sign in</Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" role="user-block-avatar">
          <img src={avatar || ''} alt="User avatar" width="63" height="63" onClick={() => navigate(AppRoute.MyList)} data-testid='avatar'/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={signOutClickHandler}>Sign out</a>
      </li>
    </ul>
  );
}

export default User;
