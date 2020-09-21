import React, { useState, useEffect } from 'react';
import './App.css';

const API = 'http://orangevalleycaa.org/api/videos';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Videos</h1>
      </header>
      {data.length &&
        data.map((entry) => (
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
    </div>
  );
}

export default App;
