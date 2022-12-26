import './error.css';
import { Reducer } from '../../const';
import {useAppSelector} from '../../hooks';

function Error(): JSX.Element | null {
  const error = useAppSelector((state) => state[Reducer.MAIN_REDUCER].error);

  return (error)
    ? <div className='error'>{error}</div>
    : null;
}

export default Error;
