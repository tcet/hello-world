Javascript syntax


- fixed value (literals)
- variable value

- fixed values = any number or strings
- variable = Variables are use to store the data value, Javascript uses the var,let and const to declare variabes
- arithmetic operators are used (+,-,*,/) to compute values


let
introduced in  ES6
variables declared with let have block scope
variables declared with let must be declared before use
variables declared with let cannot be redeclared in the same scope
Redeclaring a variable inside a block will not redeclare the variable outside the block:

const 
ES6 keyword
block scope 

var
global scope
can be redeclared
Redeclaring a variable inside a block will also redeclare the variable outside the block:

					
	**Scope	Redeclare	Reassign	Hoisted	Binds this
var	No	Yes	Yes	Yes	Yes
let	Yes	No	Yes	No	No
const	Yes	No	No	No	No**

