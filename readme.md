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
// return [{number: 3, name: "this"}];

const recurrentData = myArray.recurrent(2);
// return [{number: 3, name: "this"}, {number: 2, name: "my"}];
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

Find data from the array with regex
```javascript
const myArray = new Rarray(['this', 'is', 'hello', 'world', {
    name: "thomas",
    infos: {
        level: 18
    }
}, {
    name: "lucas",
    infos: {
        level: 50
    }
}, {
    name: "other",
    infos: {
        level: 2
    }
}]);

myArray.find({
    regex: /is/, //optional
    morethan: 5, //optional | the type must be no defined or must be number
    lessthan: 5, //optional | the type must be no defined or must be number
    type: "string" //type is optional
});
//return [ 'this', 'is' ]

myArray.findJSON({
    regex: /as/, //optional
    type: "string", //type is optional
    morethan: 5, //optional | the type must be no defined or must be number
    lessthan: 5, //optional | the type must be no defined or must be number
    where: "name"
});
//return [ { name: 'thomas', infos: { level: 18 } }, { name: 'lucas', infos: { level: 50 } } ]

myArray.findJSON({
    regex: /2/, //optional
    morethan: 5, //optional
    lessthan: 5, //optional
    where: "infos.level"
});
//return [ { name: 'other', infos: { level: 2 } } ]
```

Remove data
```javascript
const myArray = new Rarray(['this', 'is', 'hello', 'world', {
    name: "thomas",
    infos: {
        level: 18
    }
}, {
    name: "lucas",
    infos: {
        level: 50
    }
}, {
    name: "other",
    infos: {
        level: 2
    }
}, 5, 10, 2]);

myArray.findAndRemove({
    regex: /is/, //optional | it removes "this" and "is" from the array
    lessthan: 10, //optional | it removes 2 and 5 from the array
    morethan: 9 //optional | it removes 10 from the array
});

myArray.findAndRemoveInJSON({
    where: "name",
    regex: /as/ //optional
});

myArray.findAndRemoveInJSON({
    where: "infos.level",
    morethan: 25 //optional
}); //it deletes all data where the level is greater than 25
```

Return the array into string
```javascript
myArray.text();
```

Import Array from string
```javascript
myArray.import(String);
```

## Or just replace the array
```javascript
myArray.edit(['new', 'array']);
```