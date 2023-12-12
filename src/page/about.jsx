import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'AIzaSyDRu_ghR72v5zcNpWdXhYCy5zZHUmOHJiQ'; 
    const CHANNEL_ID = 'UCAOtE1V7Ots4DjM8JLlrYgg';
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

    axios.get(url)
      .then((response) => {
        setVideos(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Error loading videos!</div>;

  return (
  <div className="center">
      <h1>About Us</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="video-thumbnail" />
            <p className="video-title">{video.snippet.title}</p>
          </div>
        ))}
      </div>
  </div>
  );
}

export default About;
