import './WebcamControl.css';

function clickMe() {
    alert("You clicked me!");
  }

function App() {
  return (<
    div>
    <button onClick={clickMe}>Default Button</button>
  </div>
);
}

export default App;