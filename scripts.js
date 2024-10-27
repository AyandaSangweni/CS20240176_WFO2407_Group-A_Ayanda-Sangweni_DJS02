const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

try {
// Check if inputs are empty
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again";
  return;
}

// Convert value input to numbers
const dividendNumber = Number(dividend);
const dividerNumber = Number(divider);

// Check if divider is zero
if (dividerNumber === 0) {
  console.error("Error: Division by zero is not allowed.");
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  return;
}

 // Check if inputs are not numbers
 if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
  console.error("Error: Invalid input detected.");
  document.body.innerHTML = "Something critical went wrong. Please reload the page.";
  throw new Error("Invalid input detected.");
}
// Perform the division and display the result as an integer
result.innerText = Math.floor(dividendNumber / dividerNumber);

} catch (error) {
  console.error("Caught error:", error);
}
});