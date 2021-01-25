## 4. Event loops

### Explanation

https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/event_loop.md

### Example

```Javascript
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}


foo()
```

Output:

```Javascript
foo
bar
baz
```

Call stack
![Call Stack](../assets/call_stack_example.png)

### Exercise

> [Visualisation of an eventloop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### Essence

---

## 4. Event Loop

If a webpage contains JavaScript, then the browser knows it has to execute the instructions contained in the script files. But how does the browser know what to do first? This is where the `Event Loop` comes in.

Note: while this mechanism is important to be aware of, keep in mind that you won't be using it actively in development.

In simple terms, the `Event Loop` is a mechanism that operates in the browser. It keeps track of the order of execution of JavaScript commands. consists of 4 parts:

1. Heap. This is where the browser assigns space in memory to each process
2. Call Stack. This is the amount of JavaScript commands (read: function calls and events) that need to be executed
3. Web APIs. These are objects (like the document) and functions (like XMLHttpRequest) that can be used within the JavaScript commands found in the Call Stack
4. Callback Queue. This is the "waiting line" for asynchronous function calls

To see it in action check out the following resources:

- [What the heck is an event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [JavaScript Event Loop](https://www.youtube.com/watch?v=XzXIMZMN9k4)
