import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LatestNews from './components/MainBody/LatestNews';
import data from './components/data/news.json';

function App() {
  return (
    <div>
     <Header/>

    <LatestNews/>
</div>
  );
}

export default App;