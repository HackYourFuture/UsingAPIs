## 1. Object-Oriented Programming (OOP)

So far we've learned about various programming concepts. These are the basics of what makes up any application: it's the **WHAT** of writing applications. However, now that you're familiar with them it's time to go to the next level: the **HOW** of writing applications.

Like in any field, you first have to master the basics before you can create your own style of creating something new. Let's say that you want to start playing a musical instrument: the piano. At first you have to learn the basics: the different scales, notes, melodies, tempo (music basics), then you have to learn how to compose songs (writing notes in the correct order). Once you understand all of that is it time to learn a specific **style** of composing songs.

It's the same way with programming. At first you're learning about variables, functions, loops, etc. (the basics), then you learn how to build applications (writing code in the correct order). Once you've learned all of this you can start thinking about the **style** of building applications.

### 3 main styles (paradigms)

There are 3 big programming styles (or to use a fancier term: paradigms) popular right now:

1. Procedural
2. Object-Oriented
3. Functional

Up until now you implicitly learned a basic way of writing code, called `procedural programming`. In this style we break problems up into functions and variables, and execute them as one long procedure. There is no real thought behind code organization or reusability, it just needs to be executed. In this style we essentially say: "Hey computer do this, then that, and also this and later that." There is not much thought put into it.

Take this example:

```js
const numbers = [14, 5, 25, 8];

const filterDoubleDigits = numbers => {
  return numbers.filter(number => {
    return number < 10;
  });
};

filterDoubleDigits(numbers);
```

Every line is executed, and this works. However, there is no real organization to the lines. This is ok when your code base is small.

But what if your application counts 1000's of lines of code?

You can imagine that reading and understanding what's happening is going to be much more difficult then.

As software increases in complexity, files become bigger and contain more code. The logical rules also become increasingly more complex. This has led programmers to start thinking more about code organization. As a result different programming styles (paradigms) have evolved.

The fundamental question people asked was: **how can we make writing code more organized and readable?**

### A different way of thinking

Object Oriented Programming (OOP) is another style (or paradigm) of building applications. It's not a language, technology or tool: it's a **set of ideas on how to approach writing software**.

Instead of writing loose variables and functions, we try to group them together in order to create entities. An example of an entity is a Person, Animal or Vehicle. By having different entities we can make them "talk to each other"!

The central question asked in OOP is this: **how can we structure our applications in a way that reflects the real world?**

> Just to make sure you completely get the idea here: OOP is about a different way of thinking about how to write software. The concepts of variables, functions, promises, API (calls) and error handling all still apply. It's just that the way code is organised is different. Instead of creating long procedures, we create objects that interact with each other.

For further study, check the following:

- [Computer programming: What is object-oriented language?](https://www.youtube.com/watch?v=SS-9y0H3Si8)
- [Object-oriented programming — the basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_%E2%80%94_the_basics)

### 4 pillars of OOP

Almost anything that evolves within programming does so to solve a certain problem. HTML was developed to make document sharing over the Internet simple and straightforward. CSS was developed to make documents more user-friendly.

The problems that OOP tries to solve is the question we saw before: how can we write code in an organized and reusable fashion?

The answer that OOP gives us can be summarised in 4 pillars. To illustrate these pillars let's use a simple example:

```js
const person = {
  name: 'Mohammad',
  age: 28,
  walk() {
    return `${this.name} is walking!`;
  },
};
```

1. **Encapsulation**: In the example data and operations (that manipulate that data)are grouped together. This is called `encapsulation`. The main benefit is that this keeps our code organised. The second benefit is that putting objects inside of a 'capsule' we can prevent direct manipulation by outside sources, this is called `data hiding`. This reduces dependencies between objects, so that change in one place doesn't affect the rest of the application.

2. **Abstraction**: Let's say we had a Complexity of logic hidden away, creating a simpler interface (remote controller to a tv). Only expose the essentials. Abstracting away complexities to create an easier to use element.

3. **Inheritance**: eliminates redundant code by inheriting properties and methods in new instances. This encourages code reusability.

4. **Polymorphism**: an object can have many forms of expression, depending on the context. Let's say we inherit

Any class that exists or is made follows these pillars.

For further study check out the following resources:

- [How to explain object-oriented programming concepts to a 6-year-old](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)
- [JavaScript OOP Crash Course (ES5 & ES6)](https://www.youtube.com/watch?v=vDJpGenyHaA)
- [Object-Oriented Programming & Classes](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/oop_classes.md)
