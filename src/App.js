import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LatestNews from './components/MainBody/LatestNews';
import References from './components/MainBody/References';
import Subscribe from './components/Subscribe/Subscribe';
import Bottom from './components/Bottom/Bottom';

function App() {
  return (
    <div>
     <Header/>

    <LatestNews/>
<div className="references">
  <div className="refTitle"> References</div>
    <References/>
    </div>

  <Subscribe/>

  <Bottom/>
</div>
  );
}

export default App;