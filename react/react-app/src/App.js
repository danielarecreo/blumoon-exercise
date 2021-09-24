import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Welcome to Blumoon Exercise!</p>
        
        <small>Click the button below to show all the authors in this exercise.</small>
        <br />
        <Button type="primary">Show All</Button>
        
      </header>
    </div>
  );
}

export default App;
