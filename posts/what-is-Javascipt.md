---
{
  "title": "What is Javascript",
  "date": "2024/03/14",
  "image": what-is-Javascript.png,
  "excerpt": Lorem ipsum dolor
    sit amet consectetur adipisicing elit Voluptatum dolores iure quia
    animi reiciendis officiis doloribus dolorum
    tempora deserunt,
  "isFeatured": true,
}
---

# What is Javascript

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

- HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

- CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

![post image](/images/posts/Postsimages/what-is-javascript.png)

The three layers build on top of one another nicely. Let's take a button as an example. We can mark it up using HTML to give it structure and purpose:

```jsx
<button type="button">Player 1: Chris</button>
```

![postImage](/images/posts/Postsimages/what-is-javascript2.png)

Then we can add some CSS into the mix to get it looking nice:

```css
button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```
![postImage](/images/posts/Postsimages/what-is-javascript3.png)


And finally, we can add some JavaScript to implement dynamic behavior:

```jsx
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

you can with click on button enter your name in alert modal and see result.
