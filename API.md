# Objek

#### Manipulate your object with simple functions

## Installation

In NPM:

```bash

$ npm install objek

```

In Nodejs:

```js
const objek = require("objek");
```

## General Usage

### `replaceObjectField({value})`

Change object key/field to whatever you want

```js
const objek = require("objek");

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
const newObject = objek.replaceObjectField({
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
const objek = require("objek");

const exampleObject = {
  name: "John",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
    state: "NY",
  },
};

const result = objek.valueToJSON(exampleObject);

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

Data Type for `value`:

| Params | Data Type | Description                               |
| ------ | --------- | ----------------------------------------- |
| value  | Object    | Object to be convert the values to string |

### `stringify(value)`

Change object to JSON

```js
const objek = require("objek");

const exampleObject = {
  name: "John",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
    state: "NY",
  },
};

const result = objek.stringify(exampleObject);

// result
'{
    "name": "John",
    "age: "30",
    "address": {
        "street": "Main Street",
        "city": "New York",
        "state": "NY",
    },
}'

```

Data Type for `value`:

| Params | Data Type | Description                    |
| ------ | --------- | ------------------------------ |
| value  | Object    | Object to be convert to string |

### `objectify(value)`

Change JSON to object

```js
const objek = require("objek");

const exampleObject = '{
  "name": "John",
  "age": 30,
  "address": {
    "street": "Main Street",
    "city": "New York",
    "state": "NY",
  },
}';

const result = objek.objectify(exampleObject);

// result
{
    name: "John",
    age: 30,
    address: {
        street: "Main Street",
        city: "New York",
        state: "NY",
    },
}

```

Data Type for `value`:

| Params | Data Type | Description                    |
| ------ | --------- | ------------------------------ |
| value  | string    | String to be convert to object |

### `deleteField(value, ...keys)`

Delete some field in object

```js
const objek = require("objek");

const exampleObject = {
  name: "John",
  age: 30,
  city: "New York",
};

const result = objek.deleteField(exampleObject, 'age');

// result
{
  name: "John",
  city: "New York",
}
```

Data Type for `value`:

| Params | Data Type | Description        |
| ------ | --------- | ------------------ |
| value  | Object    | Source of object   |
| keys   | String    | Keys to be deleted |
