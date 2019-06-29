# Wow, last day! Today's topic is Arrays and Objects

### Values in Arrays
Values in an array are accessed as if they are in a numbered list. It is important to know that the numbering of this list starts at zero, not one.

Each item in an array is automatically given a number called an index.

Each array has a property called length, which holds the number of items in the array.

### Objects
Objects group together a set of variables and functions tno create a model of something you would recognize from the real world. In an object, variables and functions take on new names. Variables become properties, and functions are known as methods.

var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],

  checkAvailability: function() {
    return this.rooms - this.booked;

  }


}

Literal notation: the easiest and most popular way to create objects

To access a property of method of an object you use the name of the object, followed by a period, then the name of the property or method you want to access. This is known at dot notation. The period is known as the member operator.

Construction notation-
The new keyword and the object constructor create a blank object. You can then add properties and methods to the object.


### Storing Data -
In JavaScript, data is represented using name/value pairs. To organize your data, you can use an array or object to group a set of related values. in arrays and objects the name is also known as the key.

Objects store sets of name and value pairs.