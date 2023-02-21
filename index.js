let counter=0
function foo(){
    console.log(counter)
    if(counter>3){
     return "done"; 
    }
    counter++
    return foo();
}

console.log(foo())
//Iterratively-O(1)->
// Time complexity and space complexity:Order of one
function FactorialIteraratiave(number){
    let fact=1;
   for(let i=2;i<=number;i++){
      fact=fact*i;
   }    
   return fact
}
console.log(FactorialIteraratiave(5));

//factorial Recursive
// Time complexity and space complexity:Order of one
function FactorialRecursive(number){
    if(number==1){
        return 1;
    }
    return number*FactorialRecursive(number-1);
}
console.log(FactorialRecursive(5))


function FibonacciIterative(number){
  let arr=[0,1];
  for(let i=2;i<=number;i++){
    arr.push(arr[i-2]+arr[i-1]);
  }
}
//FibonacciIterative
//Time complexity->Time complexity=O(n)
//Space complexity->O(1)
console.log(FibonacciIterative(5))


function FobonacciNumberRecursive(number){
  if(number<2){
    return number;
  }
  return FobonacciNumberRecursive(number-1)+FobonacciNumberRecursive(number-2);
}
//FobonacciNumberRecursive
//Time complexity
console.log(FobonacciNumberRecursive(7))