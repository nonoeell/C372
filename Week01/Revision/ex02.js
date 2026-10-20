const paymentStatus = "Approved";

if (paymentStatus === "Approved") {
  console.log("Payment successful. Thank you!");
} else if (paymentStatus === "Pending") {
  console.log("Your payment is pending. Please wait for confirmation.");
} else if (paymentStatus === "Declined") {
  console.log("Payment declined. Please try again.");
} else {
  console.log("Invalid payment status.");
}