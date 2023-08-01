export default function Payment({ money, tips, friendTips }) {
  //console.log(money);
  const average = ((tips + friendTips) * money) / 2;
  const totalTips = Number(average) + Number(money);
  //console.log(average);
  // console.log(totalTips);
  return (
    <p>
      You pay ${totalTips} (${money} + ${Math.round(average)}tip)
      {/* roundOff the tip later */}
    </p>
  );
}
