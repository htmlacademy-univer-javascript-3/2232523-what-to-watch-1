import { useEffect, useRef } from 'react';
import {FilmType} from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType;
};

function VideoPlayer({film}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef === null) { return; }
    const timeout = setTimeout(() => {videoRef.current?.play();}, 1000);
    return () => clearTimeout(timeout);
  });

  return <video ref={videoRef} src={film.videoLink} width='280' height='175' muted/>;
}

export default VideoPlayer;
