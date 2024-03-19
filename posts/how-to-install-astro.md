---
{
  "title": "How to Install Astro",
  "date": "2024/03/14",
  "image": how-to-install-astro.png,
  "excerpt": Lorem ipsum dolor
    sit amet consectetur adipisicing elit Voluptatum dolores iure quia
    animi reiciendis officiis doloribus dolorum
    tempora deserunt,
  "isFeatured": false,
}
---

# Install Astro manually

This guide will walk you through the steps to manually install and configure a new Astro project.

# Prerequisites

- Node.js - v18.14.1 or higher.
- Text editor - We recommend VS Code with our Official Astro extension.
- Terminal - Astro is accessed through its command-line interface (CLI).

# Installation

Section titled Installation
If you prefer not to use our automatic create astro CLI tool, you can set up your project yourself by following the guide below.

# 1.Create your directory

Section titled 1. Create your directory
Create an empty directory with the name of your project, and then navigate into it.

```npm
mkdir my-astro-project
cd my-astro-project

```

Once you are in your new directory, create your project package.json file. This is how you will manage your project dependencies, including Astro. If you aren’t familiar with this file format, run the following command to create one.

```npm
npm init --yes
```

# 2.Install Astro

Section titled 2. Install Astro
First, install the Astro project dependencies inside your project.

```npm
npm install astro
```

# 3.Create your first page

Section titled 3. Create your first page
In your text editor, create a new file in your directory at 'src/pages/index.' astro. This will be your first Astro page in the project.

For this guide, copy-and-paste the following code snippet (including --- dashes) into your new file:

### src/pages/index.astro

```jsx
---
// Welcome to Astro! Everything between these triple-dash code fences
// is your "component frontmatter". It never runs in the browser.
console.log('This runs in your terminal, not the browser!');

---

<!-- Below is your "component template." It's just HTML, but with
     some magic sprinkled in to help you build great templates. -->
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
<style>
  h1 {
    color: orange;
  }
</style>
```
