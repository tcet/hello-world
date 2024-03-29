// Event Loop

console.log("a");
setTimeout(() => console.log("set"), 0); // Part of a Browser will go inside a Task Queue.
Promise.resolve(() => console.log("pro")).then((res) => res()); // Micro Task Queue, Priority Queue
console.log("b");


// First Js will run then ...Priority queue and then callbacks method with Task Queue
// a
// b
// pro
// set