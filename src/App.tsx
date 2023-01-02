/** @jsxImportSource @emotion/react */
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { AppStyle } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App" css={AppStyle}>
      <header className="App-header">
        <BrowserView>
          <div>
            <h1>ByBike 바이바이크</h1>
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
