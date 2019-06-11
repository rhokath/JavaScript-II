// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function saysHello(name) {
  return function (greeting = "Hello"){
    return ' ${greeting} , ${name} nice meeting you!';

  }
}
saysHello('John')('Hi')
console.log(saysHello('John')('Hi'));
const lastName = 'Bond';
function greet(){
  const firstName = 'James';
  return 'The name ${lastName}, ${firstName} {lastName}'
}
console.log(greet())



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count = count + 1;
    return count;
  }
};
const newCounter = counter();
console.log(newCounter())
console.log(newCounter())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.\
  let count = 0
  return Factory = {
    increment: function(){
      return ++count;
    },
    decrement: function(){
      return --count;
    }
  }

};
