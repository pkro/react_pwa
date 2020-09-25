import React, { useState, useEffect } from 'react';
import './App.css';
import defaultVideo from './videos/WomanSculptsClayMusic_042009083.mp4';
import defaultImage from './videos/WomanSculptsClay_042009083.png';
const API = 'https://orangevalleycaa.org/api/videos';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(API)
  //       .then((response) => response.json())
  //       .then((data) => setData(data))
  //       .catch((e) => console.log(e));
  //   };
  //   fetchData();
  // }, []);

  const offlineVideo = {
    id: '1',
    video_url: defaultVideo,
    name: 'Modeling Faces in Clay with Janet Blake',
    description:
      "This workshop, lead by acclaimed sculptor, and OVCAA resident artist, Janet Blake, is a don't miss experience. Janet shares tips and tricks that have made her one of the foremost artists in modeling faces in clay. Her engaging style will have you clamoring for more.",
    duration: '00:00:38',
    created_by: 'Ronald Winter, Video Producer, OVCAA ',
    image:
      'https://orangevalleycaa.org/api/media/images/WomanSculptsClay_042009083.png',
    thumbnail: defaultImage,
    cropped:
      'https://orangevalleycaa.org/api/media/images/cropped/WomanSculptsClay_042009083.png',
    file_name_original: 'Woman sculpts clay_042009083.mp4',
    popularity: '10',
    category_id: '2',
    category: 'Craft',
    keywords: 'clay,face,janet blake,sculpture',
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Art Videos</h1>
      </header>
      <div key={offlineVideo.id}>
        <h2>{offlineVideo.name}</h2>
        <video
          height={200}
          controls
          src={offlineVideo.video_url.replace('http://', 'https://')}
          poster={offlineVideo.thumbnail.replace('http://', 'https://')}
          preload={'metadata'}
          alt={offlineVideo.description}
        />
      </div>
    </div>
  );
}

/*
{data.length &&
        data
          .filter((video) => +video.id !== +offlineVideo.id)
          .map((entry) => (
            <div key={entry.id}>
              <h2>{entry.name}</h2>
              <video
                height={200}
                controls
                src={entry.video_url}
                poster={entry.thumbnail}
                preload={'metadata'}
                alt={entry.description}
              />
            </div>
          ))}
      {!data.length && <>Loading...</>}
      */
export default App;
