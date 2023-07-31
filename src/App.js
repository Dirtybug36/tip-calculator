function App() {
  return (
    <div className="App">
      <>
        <Bill />
        <Service />

        <Payment />
        <Button />
      </>
    </div>
  );
}
function Bill() {
  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" />
    </div>
  );
}
function Service() {
  return (
    <>
      <p>How did you like the services?</p>
      <select>
        <option>Dissatisfied(0%)</option>
        <option>It was ok(5%)</option>
        <option>It was good(10%)</option>
        <option>It was amazing(20%)</option>
      </select>
      <Friend />
    </>
  );
}
function Friend() {
  return (
    <>
      <p>How did your friend like the services?</p>
      <select>
        <option>Dissatisfied(0%)</option>
        <option>It was ok(5%)</option>
        <option>It was good(10%)</option>
        <option>It was amazing(20%)</option>
      </select>
    </>
  );
}
function Payment() {
  return (
    <p>
      You pay ${} (${} + ${}tip)
    </p>
  );
}
function Button() {
  return <button>Reset</button>;
}

export default App;
