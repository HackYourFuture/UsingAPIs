## 2. ES6 Classes

### Data structures revisited

Programming is about 2 things: **information** and **communication of that information**. Everything else flows from those two basic ideas. In programming we take this idea of "information" apart and categorize it into what we call `data structures`. Each data structure breaks down "information" in a specific category, for example for words we use `strings`. For numbers we use `numbers`.

### Objects

In JavaScript, objects are special. In your programming so far you most likely have created objects like this:

```js
const anObj = {
  name: 'Cool Object',
};
```

This is called an `object literal`, and it's a valid way of creating an object. However, writing it like this "abstracts away" a lot of what's happening behind the scenes.

> To abstract away refers to intentionally hiding the details of how something complex works in order to simplify things conceptually. For example, the remote to your television is a complex device, but all of this is abstracted away so you don't have to deal with it. You just press the ON button and it works.

You can write the same thing by using the Object `constructor function`.

```js
const anObj = new Object();
anObj.name = 'Cool Object';
```

Well, what is a constructor function? To understand that we need to start at the beginning first: `factory functions`.

### Factory functions

If we want to create an object we can just use an `object literal` and we're done. But what if we want to create hundreds of copies (or as we say in programming, 'instances') of that same object?

For that we use `factory functions`. Don't let the name mislead you though, a factory function is just a regular function. However, the single differentiating factor is that it always returns an object instance: it is a factory that produces object instances, hence the name `factory function`. Here's an example:

```js
// Defining a blueprint for a person:
function createPerson(name, age) {
  var obj = {
    name: name,
    age: age,
    walk: function() {
      console.log(`${this.name} is walking!`);
    },
  };
  // other code to manipulate our object in some way here
  return obj;
}
```

This is the most simple way of defining a `template`/`blueprint`/`class` (these are all synonyms in this context) and creating object instances from it. Now every time we call this function we're creating a new person object.

```js
const noer = createPerson('Noer', 27);
const wouter = createPerson('Wouter', 33);
const federico = createPerson('Federico', 32);
```

Go through the following to learn more about factory functions:

- [The Factory Pattern](https://www.youtube.com/watch?v=0jTfc4wY6bM)
- [JavaScript Factory Functions](https://www.youtube.com/watch?v=jpegXpQpb3o)

### Constructor functions

`Constructor functions` are ordinary functions that have a special purpose: to create object instances. You can consider them the more advanced version of `factory functions`.

Here's an example:

```js
// // Defining a blueprint for a person:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

The difference with a factory function is the way to instantiate it. Instead of just calling it we have to use the keyword `new`, like so:

```js
const noer = new Person('Noer', 27);
```

Learn more about constructor functions:

- [JavaScript Constructor Functions](https://www.youtube.com/watch?v=23AOrSN-wmI)
- [Constructors and object instances](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)

### Classes

A `class` is an essential idea within OOP: it's a **blueprint/template** of an entity. When we define a class we give it properties and behaviors. For example, a Person class can have a `name`, `age` and `gender`; these are the properties of the Person. Additionally, a Person can also `talk`, `walk` `sleep`; these are the behaviors of the Person.

![OOP Classes](../assets/OOP.png)

Let's take an example of a class, written in ES6 syntax:

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  talk(sentence) {
    console.log(sentence);
  }

  sleep() {
    console.log('Zzzzzzzzz....');
  }
}
```

When defined like above, it's merely a definition. It's not an `instance` of it. Or in other words: it's a new blueprint we've created, but not yet a real person.

To create a real Person, we have to `instantiate` it:

```js
const aisha = new Person('Aisha', 25, 'Female');

aisha.talk('Hi! My name is Aisha!'); // Result: Hi! My name is Aisha!
```

> An ES6 class is essentially the same thing as a constructor function, only written in a clearer and more straightforward way. You can call it an upgrade to constructor functions (similar to how Promises are an upgrade to callbacks).

Go through the following to learn more about classes:

- [Object Oriented JavaScript With ES6: The Class](https://www.youtube.com/watch?v=sJvPXb_lmPE)
- [An overview of ES6 classes](https://thecodebarbarian.com/an-overview-of-es6-classes)
