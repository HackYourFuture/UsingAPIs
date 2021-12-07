# Project

build a portfolio using the GitHub API and host it as your home page with GitHub Pages, you will need to create a repo called `your-user-name.github.io`

---

> copied from Be async module, there is less detail in the BE prompt than the AMS because students have already learned to plan and structure their projects so it's expected they will come up with their own plan

You've made it this far, time to show off a bit! Build yourself a sick portfolio to showcase all of your work so far. Using the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest) gather stats, links and collaborators to showcase your best work. Here is a [helpful tutorial](https://www.youtube.com/watch?v=5QlE6o-iYcE) to get you rolling (hint: avoid pushing your GitHub auth token!).

### Checklist

```md
- [ ] [repo](https://github.com/_/_.github.io) (with a complete README)
- [ ] [live demo](https://_.github.io)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] ES Modules (`import`/`export`)
  - [ ] at least one `class`
  - [ ] at least one call to the GitHub API
  - [ ] Logs of each user interaction
```

Looking for an extra challenge? Try to implement these concepts:

- [learn-component-architecture](https://github.com/oliverjam/learn-component-architecture)
- [client-side-routing](https://github.com/oliverjam/learn-client-side-routing)

---

> from AMS JS3 module

## **4. PROJECT: Hack Your Repo I**

In the following three weeks you are going to write an application that makes use of the [GitHub API](https://developer.github.com/v3/guides/getting-started/). Each week builds on top of the other, just like a real-world application!

[![UI Example](./assets/hyf-github.png)](https://js3-spa.herokuapp.com/)
Click on the image to open up the demo of the application!

This application, HackYourRepo, does 2 things:

1. It makes connection to the GitHub API and retrieves all the repositories found in the [HackYourFuture account](https://www.github.com/hackyourfuture).
2. It displays those repositories in an alphabetically-ordered list. When a user clicks on any of the repository names it will show more details about it.

In the course of the next 3 weeks you'll be writing the necessary code to make all of this work!

### 4.1 Requirements

To get started, make sure you're in the right GIT branch: `week1-[YOURNAME]`. Then, navigate to the `hackyourrepo-app` folder and become familiar with the files there.

This week you're required to (1) setup the HTML structure of the application. In addition, you are expected to (2) style the application to make it user-friendly.

Here are the requirements for the HTML:

- Include 3 `<section>` tags
- Include a `<select>` tag
- Use the following placeholder data:

```js
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
```

Here are the requirements for the CSS:

- Make use of `flexbox`
- Make use of `media-queries` and `calc()` to make the page responsive ([mobile, tablet, desktop](https://tinyurl.com/yc5zmste))

Other than this you can create your own version of the page!

## **4. PROJECT: Hack Your Repo II**

> This week we'll continue building on our work from last week. Make sure to navigate to the `hackyourrepo-app` folder and start based on the code you wrote!

This week we'll do a couple of things:

1. We'll remove our HTML elements and remake them using JavaScript only!
2. We'll replace our placeholder data with real data from the GitHub API
3. We'll display this data in a separate column of the user interface

On the surface, it'll look exactly the same. But functionally, it'll based around JavaScript only!

Here are the requirements:

- Remove the HTML elements you created last week, and only keep the `<script>` tag (you can keep the styling)
- Recreate all the HTML elements using JavaScript
- Populate the `<select>` with options. Use the data fetched from the GitHub API, using this URL:

```js
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
```

- When a user changes the option in the `<select>` tag, listen to that "change" event and make an HTTP Request to the GitHub API to get repository-specific data. Read the documentation to find out which URL you need to use: [GitHub API Documentation](https://developer.github.com/v3/)
- When the repository-specific has been fetched, populate the right columns: contributors and repository details.
- If there's an error in the HTTP Request, display the following:

![HTTP Error](./assets/hyf-github-error.png)

- Create a `main` function that will execute all of your functions only when the window has fully loaded

The end result should be similar to this in styling, but exactly in functionality:

[![UI Example](./assets/hyf-github.png)](https://js3-spa.herokuapp.com/)
Click on the image to open up the demo of the application!

Good luck!

## **4. PROJECT: Hack Your Repo III**

> This week we'll continue building on our work from last week. Make sure to navigate to the `hackyourrepo-app` folder and start based on the code you wrote!

Our application is looking pretty nice so far! This week we'll do 2 things:

1. We'll refactor and modularize our application
2. We'll add a feature: pagination!

Let's break each of them apart.

### 4.1 Refactor and modularize application

We'll first start off with refactoring, so that we have a clean codebase to build upon.

Like you've learned this week, refactoring is all about writing "clean code": code that is readible and easy to add to.

When writing the JavaScript code last week, most likely you wrote everything in a single JavaScript file (the `script.js` one). This week we'll create many more files, that we then will all bring together in that `script.js` file to execute. This act is called `modularization`, and you'll practice with this more and more as time goes on.

Next to that you'll refactor your code using the software design principles you've learned about this week: DRY, KISS and others you might have picked up. How does would look like exactly in your codebase is left up to you.

Here are the requirements:

- Create a separate `.js` for every function you create
- Import all top-level functions into the `script.js` file to execute when the window has loaded
- Rewrite your logic to be as simple as possible. Use loops and logical operators when needed
- Rename your functions and variables to be as semantic as possible
- Store all your JavaScript files, besides `script.js` in a folder called `util` (short for utility functions)

> Utility functions are reusable functions that are made to solve common problems. They are regular functions that perform tasks like: performing a calculation, transform one data type into another or perform a DOM operation.

### 4.2 Add a feature: Pagination

You might have noticed that when a user selects a repository that has many contributors, the page's height becomes bigger and bigger (thus forcing the user to scroll down). Let's change that by adding pagination!

What is pagination? Take a look at this:

![Pagination Example](https://lorisleiva.com/content/images/2020/10/laravel-pagination-with-tailwindcss.png)

In the illustration, each number represents a page. You might have seen it before on websites like Amazon, when you're browsing through different products.

We'll replicate this functionality to allow a user to browse through different contributors without have to scroll incessantly.

Here are the requirements:

- Each "page" should contain at maximum 5 contributors. If the repository selected contains more than 5 contributors, it will get split up unto a different page (and thus create another addition)
- Slice the array into smaller parts and create a new page every time the maximum has been reached
- Allow a user to click from page to page by clicking on the number, or an arrow to go one page forward or backward

Good luck!
