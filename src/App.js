import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loz an hoang"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Row 
          >
          <Col xs="12" md="3"></Col>
            <Col xs="12" md="6">
              <Button variant="primary" size="lg" active
                onClick={() => { alert("Hoang an loz") }}
              >
                Press me
        </Button>
            </Col>
            <Col xs="12" md="3"></Col>
          </Row>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
