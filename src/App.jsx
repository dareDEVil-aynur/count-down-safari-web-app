import "./App.css";
import CountdownTimer from "./CountdownTimer";

function App() {
  /* change this date according to your needs */
  const targetDate = "2025-01-01T00:00:00";

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;
