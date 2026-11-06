const VAT_RATE = 0.075;
const DISCOUNT_THRESHOLD = 50000;
const DISCOUNT_RATE = 0.1 ;

const adireFabricPrice = 15000;
const asookeFabricPrice = 22000;
const ofadaRicePrice = 18000;
const expectedGrandTotal = 53212.5;

// Work out the subtotal by adding the three prices
const subtotal = adireFabricPrice + asookeFabricPrice + ofadaRicePrice;

// Work out the discount with an if statement
let discountAmount = 0;
if (subtotal >= DISCOUNT_THRESHOLD) {
    discountAmount = subtotal * DISCOUNT_RATE;
}

// Work out the amount afer discount
const amountAfterDiscount = subtotal - discountAmount;

// Work out the VAT amount
const vatAmount = amountAfterDiscount * VAT_RATE;

// Work out the grand total and round to 2 decimal places using the trick on the assignment
const grandTotal = Math.round((amountAfterDiscount + vatAmount) * 100) / 100;

//Compare the grand total with expected grand total and print the result
if (grandTotal === expectedGrandTotal) {
    console.log(`PASS: grand total is ${grandTotal}`);
} else {
    console.log(`FAIL: expected ${expectedGrandTotal} but got ${grandTotal}`);
}

// EXTRA CHALLENGE: Calculate the delivery fee based on grand total
let deliveryFee = 0;
let deliveryBand = "";

if (grandTotal >= 50000) {
    deliveryFee = 0;
    deliveryBand = "Free (order is 50,000 or more)";
} else if (grandTotal >= 20000) {
    deliveryFee = 1500;
    deliveryBand = "1,500 (Order is between 20,000 and 49,999.99)";
} else {
    deliveryFee = 3000;
    deliverBand = "3000 (Order is below 20,000)";
}

// Calculate the final total including delivery
const finalAmountPayable = grandTotal + deliveryFee;

//Print the delivery details and final payout

console.log(`Delivery Band: ${deliveryBand}`);
console.log(`Final Amount Customer Pays; ${finalAmountPayable}`);