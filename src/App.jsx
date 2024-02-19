import "./App.css";
import CountdownTimer from "./CountdownTimer";

function App() {
  /* change this date according to your needs */
  const targetDate = "2024-03-04T00:00:00";

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;
