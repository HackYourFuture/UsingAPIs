# Week 3

In the final week of the Using API's module you will put everything you have learned to good use and build your own single page application that is connected to an API! What you build is totally up to you. Maybe you already had an idea in your head for a while, or maybe you will get inspired by all the open API's that are available.

This is quite a big undertaking, so during the project one of the mentors for this module will be assigned to you. Feel free to ask them for help if you are stuck or unsure, but they have been instructed to not write any code for you :).

## Project requirements
We want you to get excited and be free to build something you are passionate about, but there are some things that we need to see you have mastered. This means there are a few requirements:

- The app needs to be a single page application. That means only one `index.html` file and JavaScript needs to update the html using DOM manipulation.
- The app needs to interact with an API to grab data.
- The app needs to have loading/error handling for the interaction with the API.
- The app needs some user interaction such that you need to grab different data from the API. So you cannot just grab everything from the API and store it locally with one fetch.
- Follow the [guidelines for technical assignments](https://github.com/HackYourFuture/ta_guidelines). This will help you not get stuck or end up with only half an application and make sure that what you have at the end is something presentable.

## Ideas
There are many APIs that are open to get data from, have a look at the following lists to see if there is a topic that interests you:

- [publicapi.dev](https://publicapi.dev)
- [public api repo](https://github.com/public-apis/public-apis)
- [API list](https://apilist.fun/)
- [Public APIs](https://public-apis.io/)

When looking to see if an API is suitable for you there are a couple of questions to check:
1. Is the API rated, and if so how?

`Rated` in an API context means how many requests you can do. It could be rated in time (how many requests you can make per second), or in total requests. Avoid those that have a total requests rate. Generally these apps will not make many requests a second so that is not a problem. If you don't need an API key then you are generally safe.
If you are unsure, contact your project mentor.

2. Is the data available that I want?

Have a look through the end points (there is documentation for every API) and check how the endpoints are structured. What data is available and will you be able to get what you need? You can even already query it a bit with `Postman` to try some things out.

3. Does the API support CORS?

CORS stands for Cross-Origin Resource Sharing and can be a problem when interacting with an API. In some of the lists above you can see or filter on if it is supported and you should be fine. The best way to check this is to try to do a request of the API via a fetch command in the browser as you have learned last week. Then you know for sure it works as expected!
For more information about CORS have a look at the [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

If you really are stuck and have no inspiration, have a chat with your project mentor and talk it through together to come up with something.

## Final product
The final product (the repository is the product, not just the application) should be something that you can show off on your CV. So have a look at our technical assignment guidelines [here](https://github.com/HackYourFuture/ta_guidelines) and our design guidelines [here](https://github.com/HackYourFuture/design_guidelines) to see what it entails. By following those guidelines your app AND your code will look great, making it a great thing to show off to employers. You will also get into the habit of doing this with all the technical assignments you will get during your job search.

## Planning and deadlines
There are only 2 deadlines in the project, how you divide your time for the rest is up to you.

### Deadline 1: Project definition
By *Thursday 18:00PM CET* (but the earlier the better) you should send a short description of what your app will be as well as the name of the company whose brand/colour palette you will be mimicking to your project mentor.

The description should make it clear that your application will adhere to the requirements. It is best to divide it into `must have` parts (that fulfil the requirements and will be built first) and `nice to have` parts (features you can add on later to make your app cooler). The reason to make this division is to make sure that you will also prioritise your work correctly. You will probably run into time issues at the end, and it is possible to cut out extra features, but not the `must have`'s. A week is not a lot for building an application and in the end we will only be able to evaluate based on what is working.

The company brand/colour palette will help you design something that looks good, as explained in our [design guidelines](https://github.com/HackYourFuture/design_guidelines).

### Deadline 2: Application
By *Tuesday 23:59PM CET* you should send a link to your github project to the Education Director. Make sure that everything works for them! The best way to test this is to clone your repository to a new directory on your computer and try to run it there.

## Grading
After finishing the project you will get another technical interview about your own project to determine if you can go on to the next module. This technical interview is similar to what you had in the [Browsers module](https://github.com/HackYourFuture/Browsers/blob/main/PROJECT.md#the-interview), except that instead of explaining how to implement a feature you will be given some JavaScript code and asked some questions about it. Keep an eye on your class channel to see when these will be.

_Note: The difficulty of the application affects the grading in two ways:_
- You get extra points for creating a difficult application (things like multiple pages, using multiple data sources, having many features, etc)
- We will expect simpler applications to have better structured code and will be more lenient on more complex applications

_Note: following the technical assignment guidelines will also be a part of the grading_
- Make sure you have read the [design guidelines](https://github.com/HackYourFuture/design_guidelines) and that your app design follows these guidelines
- Make sure you have read the [technical assignment guidelines](https://github.com/HackYourFuture/ta_guidelines) and that your code and README follows these guidelines

## Final remarks
As you are all working on the projects this week there will not be a Q&A session on Sunday this week.

Enjoy getting practical!


