const payments = [
    { petName: "Mochi", owner: "Alice", amount: 50, status: "Approved" },
    { petName: "Coco", owner: "Ben", amount: 80, status: "Pending" },
    { petName: "Luna", owner: "Chloe", amount: 40, status: "Declined" }
];
// 1. Display Mochi's payment status
console.log(`Mochi's payment status: ${payments[0].status}`);

// 2. Display payment details for each pet
for (let i = 0; i < payments.length; i++) {
  const payment = payments[i];
  console.log(
    `${payment.petName} - Owner: ${payment.owner}, Amount: $${payment.amount}, Status: ${payment.status}`
  );
}