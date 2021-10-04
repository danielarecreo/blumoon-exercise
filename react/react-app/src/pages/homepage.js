import { Button } from 'antd';

const Homepage = () => {
    return (
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Welcome to Blumoon Exercise!</p>
          
          <small>Click the button below to show all the authors in this exercise.</small>
          <br />
          <Button href='/authors' type="link">Show All</Button>
        </header>
    )
}

export default Homepage;