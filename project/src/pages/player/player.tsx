import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmByID } from '../../store/api-actions';
import Load from '../../components/loader/loader';
import { Reducer } from '../../const';

function Player(): JSX.Element {
  const filmId = Number(useParams().id);
  const film = useAppSelector((state) => state[Reducer.FILM_REDUCER].film);
  const isFilmLoadingStatus = useAppSelector((state) => state[Reducer.FILM_REDUCER].isFilmLoading);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPause, setIsPause] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const progressRef = useRef(null);
  const [progressPosition, setProgressPosition] = useState(0);

  const updateTime = () => {
    if (videoRef.current) {
      setTimeLeft(Math.round(videoRef.current?.duration - videoRef.current?.currentTime));
      setProgressPosition((videoRef.current?.currentTime * 100) / videoRef.current?.duration);
    }
  };

  const getTimeLeft = () => {
    const bringTimeToFormat = (time: number) => time > 9 ? time : `0${time}`;

    const hours = bringTimeToFormat(Math.floor(timeLeft / 60 / 60));
    const minutes = bringTimeToFormat(Math.floor(timeLeft / 60 - Math.floor(timeLeft / 60 / 60) * 60));
    const seconds = bringTimeToFormat(Math.floor(timeLeft % 60));

    const timeInActualFormat = `${minutes}:${seconds}`;
    return hours > 0 ? `${hours}:${timeInActualFormat}` : timeInActualFormat;
  };

  const actByPlayPauseClick = () => {
    if (videoRef.current) {
      if (isPause) {
        videoRef.current.play();
        setIsPause(false);
      } else {
        videoRef.current.pause();
        setIsPause(true);
      }
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (filmId !== undefined) {
      dispatch(fetchFilmByID(filmId.toString()));
      setIsPause(true);
    }
  }, [dispatch, filmId ]);

  if (isFilmLoadingStatus) {
    return <Load />;
  }

  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.posterImage}
        ref={videoRef}
        onTimeUpdate={updateTime}
      >
      </video>

      <Link to={`/films/${film?.id}`} type="button" className="player__exit">
          Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"/>
            <div className="player__toggler" style={{left: `${progressPosition}%`}} ref={progressRef}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeLeft()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" data-testid='player' onClick={actByPlayPauseClick}>
            {isPause ? (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"/>
                </svg>
                <span>Pause</span>
              </>
            )}
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={() => {videoRef.current?.requestFullscreen();}}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
