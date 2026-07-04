function add(...x) {
   return x.reduce((acc, curr) => acc + curr, 0);
}



function memo(func) {
    const cached  = {}
    console.log('cached', cached);
    return function (...x) {
      const key = JSON.stringify(x);
        if(cached[key]) {
            console.log('result from cache');
            return cached[key];
        } else {
            console.log('Calculating result');
            const result = func(...x);
            cached[key ] = result;
            return result;
        }

        

    }
}

const calculate = memo(add);

console.log(calculate(5,10,15,20)); 
console.log(calculate(5));
 



