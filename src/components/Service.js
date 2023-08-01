export default function Service({ value, setValue, children }) {
  return (
    <>
      <p>{children}</p>
      <select
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={0.05}>It was ok(5%)</option>
        <option value={0.1}>It was good(10%)</option>
        <option value={0.2}>It was amazing(20%)</option>
      </select>
    </>
  );
}
