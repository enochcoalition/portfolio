import React from 'react';
import logo from './logo.svg';
import './App.css';
 
const Lessons = (['HTML', 'CSS', 'Javascript', 'React', 'How to write JS Functions', 'JS Loops', 'JS Methods', 'How to create React components', 'JSX', 'ReactDOM.render()', 'Other React Stuff']);

const MyList = () => (
  <ul>
    {Lessons.map(item => (
      <li key={item}>{item}</li>
    ))}
    </ul>
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
                <p>
          <h2>Here's a list of things I've learned in JS Class thus far:</h2>
            <MyList />
                        
            <h3> Loading More.... </h3>
                        <img src="https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif"></img>
            </p>
        <a
          className="App-link"
          href="https://github.com/enochcoalition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="clicker">View My GitHub Repositories</button>
        </a>
      </header>
    </div>
  );
}

export default App;
