import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserView>데스크톱브라우져!</BrowserView>
        <MobileView>모바일 브라우져!</MobileView>
      </header>
    </div>
  );
}

export default App;
