import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
     
      <Player />
      <div id="challenges">
        <TimerChallenge title="basic" targetTime={1}></TimerChallenge>
        <TimerChallenge title="advanced" targetTime={5}></TimerChallenge>
        <TimerChallenge title="pro" targetTime={10}></TimerChallenge>
        <TimerChallenge title="sport" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
