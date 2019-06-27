

// loops need three pieces of info:
// what value do we start with
// when do we keep looping
// how do we update

// var lightColor = prompt("What color is the light?"); //value we start with

// while (lightColor === "red") { //when do we enter/stay in the loop
//   console.log('Stop');
//   lightColor = prompt("What color is the light?");
// } 
  


// console.log('goooooo!!!!!')

var numRooms = prompt('Hey there. How many rooms do you need to clean?');

while (numRooms > 0) {
  console.log('vacuum');
  console.log('dust');
  console.log('tidy up');
  numRooms = numRooms - 1;
}

console.log('I am done cleaning!');