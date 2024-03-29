
// Memoizing
//const add = (n) => (n + 10);
//console.log(add(9));

// a simple memoized funciton to add something and keep in memmory

const memoizedAdd = () => {
    let cache = {};

    return (n) =>{
        if(n in cache){
                console.log("Fetching from cache");
                return cache[n];
        }else{
            console.log("Calculating result");
             let result = n + 10;
             cache[n] = result;
             return result;
        }
    }
}   

    // return function from memoized
    const newAdd = memoizedAdd();
    console.time("First Call");
    console.log(newAdd(10));
    console.timeEnd("First Call");

    console.time("Second Call");
    console.log(newAdd(10));
    console.timeEnd("Second Call");