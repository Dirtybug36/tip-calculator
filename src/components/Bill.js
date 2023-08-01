export default function Bill({ input, setInput }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
    </div>
  );
}
