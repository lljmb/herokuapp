import './App.css';
import {useState, useEffect} from 'react';

// create monolith to run heroku 
// add heroku-postbuild: cd client && npm i && npm run build

const url = (path) => {
  return process.env.NODE_ENV === 'development' ? 
  `http://localhost:1234${path}` : path
}

function App() {
  const [data, setData] = useState('hey hey HAY')

  useEffect(() => {
    fetch(url('/api/'))
    // to chain promises together 
    // .then(res => res).then(data => data)
    .then(res => res.json())
    .then(apiData => setData(apiData.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        API Data: {data}
      </header>
    </div>
  );
}

export default App;
