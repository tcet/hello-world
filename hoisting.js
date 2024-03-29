// Hoisting 
 function abc() {
     
   console.log(a, b, c);
   const b = 20;    // throw reference Error (the block of the code is aware of the variable but it cannot be used until it has been declared.)
   let c = 30;      // the variable is in temporal dead zone from the start of the block until it has been declared.

   var a = 10;
 }

 abc();