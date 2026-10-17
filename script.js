//Employee Role Access System
let role = prompt("Enter your role (admin/manager/developer/intern):");
switch (role.toLowerCase.trim()) {
  case "admin":
    alert("Full Access");

    break;
  case "manager":
    alert("Team Managment Level Access");
  case "developer":
    alert("Code Access");
  case "intern":
    alert("Limited Access");

  default:
    alert("Invalid Input.Please Try Again.");
    break;
}

//Online Payment Mehtod Selection
let payment = prompt("Choose Payment Mehtod(credit/debit/api/cod:");
switch (payment.toLowerCase.trim()) {
  case "credit":
    alert("Credit Card Selected.");
    break;
  case "debit":
    alert("Debit Card Selected.");
    break;

  case "upi":
    alert("Upi Selected");
  case "cod":
    alert("COD Selected");
  default:
    alert("Invalid Input.Please Try Again.");
    break;
}

//Order Status Checker
let orderstatus = prompt(
  "Enter order status(placed/packed/shipped/delivered/cancelled.",
);
switch (orderstatus.toLowerCase.trim()) {
  case "placed":
    alert("Your Order is PLaced.");
    break;
  case "packed":
    alert("Your Order is Packed.");
    break;
  case "shipped":
    alert("Your Order is Shipped.");
    break;
  case "delivered":
    alert("Your Order is Delivered.");
    break;
  case "cancelled":
    alert("Your Order is Cancelled.");
    break;
  default:
    alert("Invalid Input.Please Try Again.");
    break;
}

//Office Working Day Checker
let workingday = prompt("Enter day name(Monday-Sunday)");
switch (workingday.toLowerCase.trim()) {
  case "monday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Working Day");
    break;
  case "saturday":
    alert("Half Day");
    break;
  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid Input.Please Try Again.");
    break;
}
