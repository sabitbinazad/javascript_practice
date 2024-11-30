//if else
let userRole = "admin";
let accessLevel;
//nested if…else
let isLoggedIn = true;
let userMessage;

//if else
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

//nested if…else
