import { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Marker from './Marker';

interface RefObject extends ReactAudioPlayer {}

const getMarker = (currentEpisode: any, currentTime: number) => {
  let result;
  for(let i = 0; i < currentEpisode.markers.length; i++) {
    let marker = currentEpisode.markers[i];
    if((currentTime >= marker.start) && (currentTime <= (marker.start + marker.duration))) {
      result = marker;
    }
  }
  return result;
}

function Episode (props: any) {
  const audioRef = useRef<RefObject | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [marker, setMarker] = useState('');

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current.audioEl.current;
      if (audio) {
        audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      }
    }
  }, [currentTime])

  useEffect(() => {
    setMarker(getMarker(props.currentEpisode, currentTime));
  }, [props.currentEpisode, currentTime])

  return(
    <div>
      <div>
        <ReactAudioPlayer
          src={props.url}
          ref={audioRef}
          autoPlay
          controls={true}
        />
      </div>
      <div>
        { marker &&
          (<Marker
            marker={marker}
          />)
        }
      </div>
    </div>
  )
}

export default Episode;