import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {Route, BrowserRouter as Router} from "react-router-dom";

import AuthorsPage from './pages/authors';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Homepage} />
        <Route path='/authors' exact component={AuthorsPage} />
      </div>
    </Router>
  );
}

export default App;
