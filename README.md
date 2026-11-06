# cart_total_checker.js
STEP 1: After folder and file is created for Session_01, CREATE CONSTANTS FOR THE STORE'S FIXED RULES 
* Open cart_total_checker.js file in the VS Code editor and  add the following lines at the very top
 const VAT_RATE = 0.075;
const DISCOUNT_THRESHOLD = 50000;
const DISCOUNT_RATE = 0.1;
* Thought Process & Explanantion: 
- Why Const? In Javascript, const  stands for "constannt". We use it for values that never change while the program runs. The VAT rate isn't going to change midway through checking a cart. so it's a constant. 
- why ALL_CAPS with underscores (VAT_RATE)?  This is a universal coding convention. When other developers look at the code, seeing words in all-caps immediately tells them. "Ah, this is a fixed configuration value that shouoldn't be altered anywhere else."
-The Numbers: 0.075 represents 7.5% VAT, 50000 Is the naira threshold to qualify for a discount, and 0.1 represents the 10% discount rate. 

STEP 3: Create constants for the item prices and expected total 
* What to do: Rght below the store rules, add the prices for the three items in the cart and the expected garand total given in the assignment:
const adireFabricPrice = 15000;
const asookeGelePrice = 22000;
const ofadaRicePrice = 18000;
const expectedGrandTotal = 53212.5;
* Thought Process & Explanation: 
- Descriptive Naming: Notice how the names are clear and descriptive ( adireFabricePrice, asookeGelePrice, ofadaRicePrice ). In coding,  never use lazy names like X, Item1 or data2. If someone else reads my code, they should instantly know what the variable holds without needing to guess.
- Expected Result (QA Mindset): As a QA engineer, you  always define your expected result before calculating the actual result. Here, we know from the store scenario that the correct final total should 53212.5. We store this so we can compare it later. 

The code should look like this now 
const VAT_RATE = 0.075;
const DISCOUNT_THRESHOLD = 50000;
const DISCOUNT_RATE = 0.1;

const adireFabricPrice = 15000;
const asookeGelePrice = 22000;
const ofadaRicePrice = 18000;
const expectedGrandTotal = 53212.5;

STEP 4 (Subtotal): We use addition ( + ) to combine our three items constants into a new constant called subtotal. Because this subtotal value won't change after it's calculated, we use const.
const subtotal = adireFabricPrice + asookeGelePrice + ofadaRicePrice;
* STEP 5( The if statement & let): 
Notice that we used let instead of const for discountAmount. Why? Because the discount isn't guaranteed! It starts at 0, and it might change to a higher number if the customer qualifies. In JavaScript, let means "this variable's value is allowed to change later."   The if (subtotal >= DISCOUNT_THRESHOLD) condition checks if the subtotal is greater than or equal to ₦50,000. If it is true, JavaScript goes inside the curly braces {} and calculates the discount (subtotal * DISCOUNT_RATE). If it is not true, it completely skips those braces and leaves discountAmount at 0.   
* Steps 6 & 7 (Amount after discount & VAT): We do basic subtraction and multiplication. We calculate the VAT after the discount has been taken off, exactly as the store rules state. 
 * Step 8 (Rounding the Grand Total):Computers can sometimes be slightly messy when storing decimals with money (e.g., they might output something like 53212.50000000001).   To fix this, the assignment gives us a neat trick: Math.round((value) * 100) / 100. This multiplies the number by 100 to shift the decimal places, rounds it to the nearest whole number, and then divides it back by 100 to give us a clean two-decimal-place currency value. 

const subtotal = adireFabricPrice + asookeGelePrice + ofadaRicePrice;
let discountAmount = 0;
if (subtotal >= DISCOUNT_THRESHOLD) {
    discountAmount = subtotal * DISCOUNT_RATE;
}

const amountAfterDiscount = subtotal - discountAmount;
const vatAmount = amountAfterDiscount * VAT_RATE;
const grandTotal = Math.round((amountAfterDiscount + vatAmount) * 100) / 100;

*FINAL STEPS: Comparing the Results and Printing PASS or FAIL 
* Step 9: (=== vs ==): Notice we used === (strict equality) instead of ==. In JavaScript, === checks if two values are equal and share the same data type. As a QA rule of thumb, always use strict equality (===) to avoid unexpected bugs in your logic. 
* Step 10 (if / else & Template Literals):The if statement checks if our calculated grandTotal matches the expectedGrandTotal. If it matches, it runs the if block; otherwise, it drops into the else block.   Template Literals (Backticks `): Notice we used backticks instead of normal single or double quotes around our strings. Backticks allow us to use interpolation—meaning we can inject variables directly inside our text using ${} (like ${grandTotal}). This is cleaner and less error-prone than trying to stitch strings together with plus signs.  

if (grandTotal === expectedGrandTotal) {
    console.log(`PASS: grand total is ${grandTotal}`);
} else {
    console.log(`FAIL: expected ${expectedGrandTotal} but got ${grandTotal}`);
}
