---
{
  "title": "What is React js",
  "date": "2024/03/10",
  "image": what-is-Reactjs.png,
  "excerpt": Lorem ipsum dolor
    sit amet consectetur adipisicing elit Voluptatum dolores iure quia
    animi reiciendis officiis doloribus dolorum
    tempora deserunt,
  "isFeatured": true,
}
---

# What is React js

Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community. you can read more about react in that [document](https://react.dev)

React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.

In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.

React’s primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so, the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages faster and create highly dynamic and responsive web applications.

# What does React.js do?

Typically, you request a webpage by typing its URL into your web browser. Your browser then sends a request for that webpage, which your browser renders. If you click a link on that webpage to go to another page on the website, a new request is sent to the server to get that new page.

This back-and-forth loading pattern between your browser (the client) and the server continues for every new page or resource you try to access on a website. This typical approach to loading websites works just fine, but consider a very data-driven website. The back and forth loading of the full webpage would be redundant and create a poor user experience.

Additionally, when data changes in a traditional JavaScript application, it requires manual DOM manipulation to reflect these changes. You must identify which data changed and update the DOM to reflect those changes, resulting in a full page reload.

React takes a different approach by letting you build what’s known as a single-page application (SPA). A single-page application loads only a single HTML document on the first request. Then, it updates the specific portion, content, or body of the webpage that needs updating using JavaScript.

This pattern is known as client-side routing because the client doesn’t have to reload the full webpage to get a new page each time a user makes a new request. Instead, React intercepts the request and only fetches and changes the sections that need changing without having to trigger a full page reload. This approach results in better performance and a more dynamic user experience.

React relies on a virtual DOM, which is a copy of the actual DOM. React’s virtual DOM is immediately reloaded to reflect this new change whenever there is a change in the data state. After which, React compares the virtual DOM to the actual DOM to figure out what exactly has changed.

React then figures out the least expensive way to patch the actual DOM with that update without rendering the actual DOM. As a result, React’s components and UIs very quickly reflect the changes since you don’t have to reload an entire page every time something updates.
