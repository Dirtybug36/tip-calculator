export default function Payment({ money, tips, friendTips }) {
  //console.log(money);
  const average = ((tips + friendTips) * money) / 2;
  const totalTips = Number(average) + Number(money);

  return (
    <p>
      You pay ${totalTips} (${money} + ${Math.round(average)}tip)
    </p>
  );
}
