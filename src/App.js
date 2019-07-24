import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

class App extends React.Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.simpleAction}>Test redux action</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>


      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
