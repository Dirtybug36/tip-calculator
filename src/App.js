import { useState } from "react";
import Bill from "./components/Bill";
import Button from "./components/Button";
import Payment from "./components/Payment";
import Service from "./components/Service";

function App() {
  const [input, setInput] = useState(0); //for the amount they we enter

  const [tips, setTips] = useState(0); //to calculate our tips

  const [friendTips, setfriendTips] = useState(0); //to calculate friends tip

  //to reset all data to initial value
  function resetHandler() {
    setInput(0);
    setTips(0);
    setfriendTips(0);
  }

  const isAmountValid = input > 0;
  //render App component
  return (
    <div className="App">
      <>
        {/* Bill component to enter the amount */}
        <Bill input={input} setInput={setInput} />

        {/* to calculate tips */}
        <Service value={tips} setValue={setTips}>
          How did you like the services?
        </Service>

        <Service value={friendTips} setValue={setfriendTips}>
          How did your Friend like the services?
        </Service>

        {/* display the payment and button components */}
        {isAmountValid && (
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
