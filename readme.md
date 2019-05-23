# Rocket Array 2.0 🎉🚀

Rocket Array 2.0 is 33.6% lighter and until 20 times more faster than Rocket Array 1.5 and is designed to be simplest way possible to manipulate your array

## Installation 🌍

    $ npm install rocket-array

## How it works ?

Initialize

```javascript
require("rocket-array"); //for node.js integration

//example for this doc
const myArray = [
  "this",
  "is",
  "hello",
  "world",
  {
    name: "alice",
    infos: {
      level: 18
    }
  },
  {
    name: "bob",
    infos: {
      level: 50
    }
  },
  {
    name: "other",
    infos: {
      level: 2
    }
  },
  5,
  10,
  2,
  "this",
  "is",
  "my",
  "world"
];
```

---

## Get recurrent data from array

```javascript
const number = 2;
const recurrentData = myArray.recurrent(number);
//return [[{number: 2, name: "this"}, {number: 2, name: "is"}]]
```

| Parameter | Type   | Required | Default |
| --------- | ------ | -------- | ------- |
| Number    | Number | No       | 1       |

---

## Get data with specific type

```javascript
const type = "number";
const onlyTypeString = myArray.only(type);
//return [5, 10, 2];
```

| Parameter | Type   | Required | Default  |
| --------- | ------ | -------- | -------- |
| Type      | String | Yes      | "string" |

---

## Remove recurrents data from the array

```javascript
myArray.removeRecurrents();
```

---

## Add data to the beginning of your array

```javascript
const data = "me";
myArray.pushBefore(data);
```

| Parameter | Type | Required | Default          |
| --------- | ---- | -------- | ---------------- |
| Type      | All  | Yes      | No Default Value |

---

## Delete data with its position in the array

```javascript
const position = 1,
  numberElement = 2;
//numberElement defines how much data should be deleted after the position
myArray.remove(position, numberElement);
```

| Parameter     | Type   | Required | Default          |
| ------------- | ------ | -------- | ---------------- |
| Position      | Number | Yes      | No Default Value |
| numberElement | Number | No       | 1                |

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

| Parameter                    | Type   | Required | Default          |
| ---------------------------- | ------ | -------- | ---------------- |
| regex                        | Regex  | No       | false            |
| type                         | String | No       | false            |
| morethan                     | Number | No       | false            |
| lessthan                     | Number | No       | false            |
| where (just for .findJSON()) | String | Yes      | No Default Value |

---

## Find and remove data

```javascript
//the "remove" functions do not change your Array
myArray = myArray.findAndRemove({
  regex: /is/,
  lessthan: 10,
  morethan: 9,
  type: "string"
});

//the "remove" functions do not change your Array
myArray = myArray.findAndRemoveInJSON({
  where: "name",
  regex: /is/,
  lessthan: 10,
  morethan: 9,
  type: "string"
});
```

| Parameter                    | Type   | Required | Default          |
| ---------------------------- | ------ | -------- | ---------------- |
| regex                        | Regex  | No       | false            |
| type                         | String | No       | false            |
| morethan                     | Number | No       | false            |
| lessthan                     | Number | No       | false            |
| where (just for .findJSON()) | String | Yes      | No Default Value |

---

## Export and import Rarray

```javascript
const local = myArray.toString(); // toString() = JSON.stringify
```

---

## Search array data with multiple parameters

```javascript
const params = [
  {
    where: "name",
    regex: /as/
  },
  {
    where: "infos.level",
    morethan: 5
  }
];

myArray.mufindJSON(params);
```

| Parameter | Type  | Required | Default          |
| --------- | ----- | -------- | ---------------- |
| Params    | Array | Yes      | No Default Value |

---

## Search array data with multiple parameters and delete them

```javascript
const params = [
  {
    where: "name",
    regex: /as/
  },
  {
    where: "infos.level",
    morethan: 5
  }
];

myArray.mufindAndRemoveInJSON(params);
```

| Parameter | Type  | Required | Default          |
| --------- | ----- | -------- | ---------------- |
| Params    | Array | Yes      | No Default Value |
