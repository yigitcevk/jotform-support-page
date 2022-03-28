import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import Page from './components/Page';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => { 
    fetch("/api/data")
    .then(res => res.json())
    .then(data => setData(data));
  });

 
  return (
    
      <div>
        <Page
        data={data} 
        />
      </div>
  );
}

export default App;