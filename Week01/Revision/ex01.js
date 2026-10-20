const groomingfee = 50;
const numberofPets = 2;
const gstRate = 0.09;

const subtotal = groomingfee * numberofPets;
const gst = subtotal * gstRate;
const total = subtotal + gst;

const message = "The total cost is $" + total;

console.log(message);
