
  let value = 123;

  const revValue = () => {
     let myrevvalue = value.toString().split("").reverse().join("");
     let mystrVal = value.toString();

     if(mystrVal == myrevvalue) {
      console.log("palindrome");
     }
     else {
      console.log("not palindrome");
     }
 }
