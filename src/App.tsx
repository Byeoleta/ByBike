import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserView>
          <div>
            <h1>ByBike</h1>
          </div>
        </BrowserView>
        <MobileView>
          <div>
            <h1>ByBike</h1>
          </div>
        </MobileView>
      </header>
    </div>
  );
}

export default App;
