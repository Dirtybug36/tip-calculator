import { useState } from "react";
import Bill from "./components/Bill";
import Button from "./components/Button";
import Payment from "./components/Payment";
import Service from "./components/Service";

function App() {
  const [input, setInput] = useState(0);
  const [tips, setTips] = useState(0);
  const [friendTips, setfriendTips] = useState(0);
  function resetHandler() {
    setInput(0);
    setTips(0);
    setfriendTips(0);
  }
  return (
    <div className="App">
      <>
        <Bill input={input} setInput={setInput} />
        <Service value={tips} setValue={setTips}>
          How did you like the services?
        </Service>
        <Service value={friendTips} setValue={setfriendTips}>
          How did your Friend like the services?
        </Service>
        {input <= 0 ? null : (
          <>
            <Payment money={input} tips={tips} friendTips={friendTips} />

            <Button handlerReset={resetHandler} />
          </>
        )}
      </>
    </div>
  );
}
export default App;
