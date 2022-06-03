# Objek

#### Manipulate your object in one function

## Installation

In NPM:

```bash

$ npm install stringify-value

```

In Nodejs:

```js
const objek = require("objek");
```

## General Usage

### `replaceObjectValue({value})`

Change object value to whatever you want

```js
const replaceObjectField = require("replace-object-field");

const exampleObject = {
  _id: "123456",
  name: "Lorem Ipsum",
  age: "25",
  address: {
    _id: "123456",
    city: "Jakarta",
    country: "Indonesia",
  },
};

// Replace _id to id
const newObject = replaceObjectField({
  object: exampleObject,
  targetField: "_id",
  newField: "id",
  isRecursive: true,
});

// result
{
  id: "123456",
  name: "Lorem Ipsum",
  age: "25",
  address: {
    id: "123456",
    city: "Jakarta",
    country: "Indonesia",
  },
}
```

Data Type for `value`:

| Params      | Data Type | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| object      | Object    | Object to be replaced                                  |
| field       | String    | Field to be replaced                                   |
| newField    | String    | New field name                                         |
| isRecursive | Boolean   | Replace all key in array of object or object in object |

### `valueToJSON(value)`

Change value of object to JSON

```js
const stringifyValue = require("stringify-value");

const exampleObject = {
  name: "John",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
    state: "NY",
  },
};

const result = stringifyValue(exampleObject);

// result
{
    name: "John",
    age: "30",
    address: '{
        "street": "Main Street",
        "city": "New York",
        "state": "NY",
    }',
}

```
