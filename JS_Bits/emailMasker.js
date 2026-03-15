function maskEmail(email) {
  let symLocation = email.indexOf("@");
  let domainName = email.slice(symLocation + 1, email.length);
  let userName = email.slice (0, symLocation);
  //return userName + "@" + domainName;
  return `${userName[0]}${"*".repeat(userName.length-2)}${userName[userName.length-1]}@${domainName}`;
}

let email = "apple.pie@example.com"

console.log(maskEmail(email));