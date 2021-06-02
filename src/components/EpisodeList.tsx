import React, { useEffect, useState } from 'react';

import Episode from './Episode';
import EpisodeListItem from './EpisodeListItem';

import { fetchURL } from '../config.json';

type EpisodeItem = {
  id: string
  name: string
  audio: string
  markers: {
    type: string,
    start: number,
    duration: number,
    content: string,
    link: string
  }
}

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisodeId, setCurrentEpisodeId] = useState('');
  const [currentEpisode, setCurrentEpisode] = useState({} as EpisodeItem);

  const handlePlay = (episodeId: string) => {
    setCurrentEpisodeId(episodeId);
  }

  useEffect(() => {
    fetch(`${fetchURL}/episodes`)
    .then((res) => res.json())
    .then((data) => setEpisodes(data))
  })

  useEffect(() => {
    if (currentEpisodeId) {
      fetch(`${fetchURL}/episodes/${currentEpisodeId}`)
      .then((res) => res.json())
      .then((data) => setCurrentEpisode(data))
    }
  }, [currentEpisodeId])

  return (
    <div>
      <ul>
        {episodes.map((episode: EpisodeItem) => (
          <EpisodeListItem
            key={episode.id}
            name={episode.name}
            id={episode.id}
            playEpisode={handlePlay}
          />
        ))}
      </ul>
      <div>
        {currentEpisode.id && (
          <div>
            <p>Current Episode: {currentEpisode.name}</p>
            <Episode
              url={`${fetchURL}${currentEpisode.audio}`}
              currentEpisode={currentEpisode}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default EpisodeList;
