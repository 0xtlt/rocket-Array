# Rocket Array 🚀
Rocket Array is designed to be simplest way possible to manipulate your array

## Installation 🌍
    $ npm install rocket-array

## How it works ?
Initialize
```javascript
const Rarray = require('rocket-array');

//example for this doc
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
}, 5, 10, 2, "this", "is", "my", "world"]);
```

---

## Get recurrent data from array
```javascript
const number = 2;
const recurrentData = myArray.recurrent(number);
//return [[{number: 2, name: "this"}, {number: 2, name: "is"}]]
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| Number | Number | No | 1 |

---

## Get data with specific type
```javascript
const type = "number";
const onlyTypeString = myArray.only(type);
//return [5, 10, 2];
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| Type | String | Yes | "string" |

---

## Get the array
```javascript
const look = myArray.get();
//return the array
```

---

## Remove recurrents data from the array
```javascript
myArray.removeRecurrents();
```

---

## Add data to the array
```javascript
const data = "me";
myArray.add(data);
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| Type | All | Yes | No Default Value |

---


## Add data to the beginning of your array
```javascript
const data = "me";
myArray.addBefore(data);
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| Type | All | Yes | No Default Value |

---

## Delete data with its position in the array
```javascript
const position = 1, numberElement = 2;
//numberElement defines how much data should be deleted after the position
myArray.remove(position, numberElement);
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| Position | Number | Yes | No Default Value |
| numberElement | Number | No | 1 |

---


## Get the length of the array
```javascript
const humanReadable = false;
//if humanReadable, it return length - 1 for the system because the first data starts at position 0
myArray.length(humanReadable);
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| humanReadable | Boolean | No | true |

---

## Find data from the array with regex
```javascript
myArray.find({
    regex: /is/,
    morethan: 5,
    lessthan: 5,
    type: "string"
});

myArray.findJSON({
    regex: /as/,
    type: "string",
    morethan: 5,
    lessthan: 5,
    where: "infos.level"
});
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| regex | Regex | No | false |
| type | String | No | false |
| morethan | Number | No | false |
| lessthan | Number | No | false |
| where (just for .findJSON()) | String | Yes | No Default Value |

---

## Find and remove data
```javascript
myArray.findAndRemove({
    regex: /is/,
    lessthan: 10,
    morethan: 9,
    type: "string"
});

myArray.findAndRemoveInJSON({
    where: "name",
    regex: /is/,
    lessthan: 10,
    morethan: 9,
    type: "string"
});
```

| Parameter | Type | Required | Default |
|---|---|---|---|
| regex | Regex | No | false |
| type | String | No | false |
| morethan | Number | No | false |
| lessthan | Number | No | false |
| where (just for .findJSON()) | String | Yes | No Default Value |

---

## Export and import Rarray
```javascript
const local = myArray.text(); //convert the array into string
myArray.import(local); //convert the text into array and save it
```