# Rocket Array 🚀
Rocket Array is designed to be simplest way possible to manipulate your array

## Installation 🌍
    $ npm install rocket-array

## How it works ?
Initialize
```javascript
const Rarray = require('rocket-array');

const myArray = new Rarray(['this', 'is', 'my', 'list', 1, 2, 3, "world", "my", "this", "this"]);
```

Get recurrent data from array
```javascript
const recurrentData = myArray.recurrent(/* default : 1 */);
// return [{number: 3, name: "this}];

const recurrentData = myArray.recurrent(2);
// return [{number: 3, name: "this}, {number: 2, name: "my"}];
```

Get the data from a type
```javascript
const onlyTypeString = myArray.only('string');
// return ['this', 'is', 'my', 'list', "world", "my", "this", "this"]

const onlyTypeNumber = myArray.only('number');
//return [1, 2, 3]
```

Get the array
```javascript
const look = myArray.get();
//return ['this', 'is', 'my', 'list', 1, 2, 3, "world", "my", "this", "this"]
```

Remove recurrents data from the array
```javascript
myArray.removeRecurrents();

const look = myArray.get();
//return ['this', 'is', 'my', 'list', 1, 2, 3, "world"]
```

Add data to the array
```javascript
myArray.add('myData');
```

Add data to the beginning of your array
```javascript
myArray.addBefore('myData');
```

Delete data with its position in the array
```javascript
myArray.remove(1);
//return ['this', 'my', 'list', 1, 2, 3, "world"]

//or

myArray.remove(1, 2);
//the second parameter defines how much data should be deleted after the position
//return ['this', 'list', 1, 2, 3, "world"]
```

Get the length of the array
```javascript
myArray.length();
//return 8
const humanReadable = false;
myArray.length(humanReadable);
//returns 7 for the system because the first data starts at position 0
```

## Or just replace the array
```javascript
myArray.edit(['new', 'array']);
```