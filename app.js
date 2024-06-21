const userInput1 = prompt("please enter your email").trim();
let username , isEmail;

// Checking if the user input value is email or not
isEmail = userInput1.includes("@")
if (isEmail && userInput1!="") {
  // Create a username from email
  username = userInput1.slice(0 ,userInput1.indexOf("@"))
  // check if the username of email is null
  if (username==="") {
    alert("please enter a valid email");
  }
}else{
  alert("please enter a valid email"); 
}

alert(username);