# Box model

<style>
  .note {
    color: red;
  }

  figcaption {
    text-align: center;
  }
</style>

> *Everything displayed by CSS is a box.*
> *The box model is a core foundation of CSS.*
- Understanding how it works?
- How is it affect by other aspects of CSS?
- How can we control it?
\- It is important.

Example:
Try with the paragraph.
```html
<p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```css
.text {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px slategray solid;
}
```

\- The with should be 143px without break down the box. If less than it. The parapahg is appears out site the box.

> *Everything must be display by CSS is box.*

## Content and sizing

- The behavior of the boxes based on the display value.
  - Dimensions of box: with, height, padding, etc ...
  - Content in site:  child elemtents or plain text content.

> *The content affect the size of the box by **default**.*

<span class="note">*</span> We can fix that by use **intrinsic sizing.**

```css
/* intrinsic sizing */
.text {
  /* The max/min-content value tells the box to only be as wide as the intrinsic minimum or maximum width of its content. */
  width: min-content; /* width: max-content; */
}
```

> *The box has a width so we call the extrinsic sized. It controls the sizing of its child element or content.*
> *We can use the **overflow** property to manage how an element handles overflow content.*

## The areas of the box model.

When using tab to the **computed**. We see the distinct box model areas. Every box model has a specific job.

<figure>
  <img src="./assets/the%20areas%20of%20the%20box%20model.png" alt="The areas of box model" />
  <figcaption>The areas of box model</figcaption>
</figure>