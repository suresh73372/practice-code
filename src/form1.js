//1.array map method :creates a new array by performing some operations on each array Element.
let arr = [12,23,34,66,45,78,89];
let array = arr.map((a)=>{
    return a
})
console.log(array);
//syntax:arr.map((value,index,array)=>{return value*value})



//2.filter:fiter an array with  values that passes a test.creates a new array
let arr1 = [12,23,34,66,45,78,89];
let arrr = arr1.filter((a)=>{
    return a > 66
})
console.log(arrr);
//arr.filter(greater-than 5)



//3.reduce:Reduce an array to a single value.
let arr2 = [12,23,34,66,45,78,89];
let newVAlue = arr2.reduce((h1,h2)=>{
    return h1 +h2
})
console.log(newVAlue);


//4.for Each:calls a function,once for each array Element.

