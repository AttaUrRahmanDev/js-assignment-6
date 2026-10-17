/*
JavaScript Assignment #6
Switch Statement using prompt() and alert()
*/

// Step 2: Employee Role Access System
let role = prompt("Enter your role (admin / manager / developer / intern):");

switch (role.toLowerCase().trim()) {
  case "admin":
    alert("Full system access");
    break;

  case "manager":
    alert("Team management access");
    break;

  case "developer":
    alert("Code access");
    break;

  case "intern":
    alert("Limited access");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 3: Online Payment Method Selection
let payment = prompt("Choose payment method (credit / debit / upi / cod):");

switch (payment.toLowerCase().trim()) {
  case "credit":
    alert("Credit card payment selected");
    break;

  case "debit":
    alert("Debit card payment selected");
    break;

  case "upi":
    alert("UPI payment selected");
    break;

  case "cod":
    alert("Cash on delivery selected");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 4: Order Status Checker
let status = prompt(
  "Enter order status (placed / packed / shipped / delivered / cancelled):",
);

switch (status.toLowerCase().trim()) {
  case "placed":
    alert("Your order has been placed.");
    break;

  case "packed":
    alert("Your order has been packed.");
    break;

  case "shipped":
    alert("Your order has been shipped.");
    break;

  case "delivered":
    alert("Your order has been delivered.");
    break;

  case "cancelled":
    alert("Your order has been cancelled.");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 5: Office Working Day Checker
let day = prompt("Enter day name (Monday - Sunday):");

switch (day.toLowerCase().trim()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Working day");
    break;

  case "saturday":
    alert("Half day");
    break;

  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid input. Please try again.");
}
