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