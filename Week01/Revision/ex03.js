const payments = [
    { petName: "Chester", owner: "Alice", amount: 50, status: "Approved" },
    { petName: "Mochi", owner: "Ben", amount: 80, status: "Pending" },
    { petName: "Mira", owner: "Chloe", amount: 40, status: "Declined" }
];
// 1. Display Mochi's payment status
console.log(`Mochi's payment status: ${payments[1].status}`);

// 2. Display payment details for each pet
for (let i = 0; i < payments.length; i++) {
  const payment = payments[i];
  console.log(
    `${payment.petName} - Owner: ${payment.owner}, Amount: $${payment.amount}, Status: ${payment.status}`
  );
}

// teacher's solution

payments.forEach((payment) => {
    if (payment.status === "Approved") {
        console.log(`Pet-care Service for ${payment.petName} is successful. Thank you!`);
    } else if (payment.status === "Pending") {
        console.log(`Pet-care Service for ${payment.petName} is pending. Please wait for confirmation.`);
    } else if (payment.status === "Declined") {
        console.log(`Pet-care Service for ${payment.petName} is declined. Please try again.`);
    }
});