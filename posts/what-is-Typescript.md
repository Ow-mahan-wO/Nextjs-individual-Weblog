---
{
  "title": "What is Typescript",
  "date": "2024/03/14",
  "image": what-is-typescript.jpg,
  "excerpt": Lorem ipsum dolor
    sit amet consectetur adipisicing elit Voluptatum dolores iure quia
    animi reiciendis officiis doloribus dolorum
    tempora deserunt,
  "isFeatured": false,
}
---

# What is Typescript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

And in terms of awareness, interest, and satisfaction, Typescript is the most popular programming language in the world.

Features of Typescript
Javascript as you might already know is a loosely typed language. This means that you can do things like this:

```ts
let a = 10;
a = "hello";
```

Here the value of a was initially a number, but later you assigned a string to it.

Whereas, Typescript is a strongly typed language i.e it has static-checking capabilities.

The biggest benefit of static-checking is the tooling that we can get in our IDEs like VSCode. With the help of static-checking, we can get:

- autocomplete suggestions
- type checking, and
- compilers can catch bugs in advance, this makes development a lot easier

# What are the prerequisites to learn Typescript?

Since Typescript is a superset of Javascript, any JS code is a valid TS code as well. And TS also guarantees that the code will be supported in any environment even if we use future features of JS. This is because we can transpile TS code to any flavor of JS code.

# How to use Typescript?

In your local machine
You need to have node installed on your machine. You can download it from here.

Then you can install Typescript using the following command:

```
npm install -g typescript
```

This will install Typescript globally on our system. You can check the version of Typescript by running the following command:

```
tsc --version
```
