# Box model

> *Everything displayed by CSS is a box.*
> *The box model is a core foundation of CSS.*
- Understanding how it works?
- How is it affect by other aspects of CSS?
- How can we control it?
\- It is important.

Example:
Try with the paragraph element.
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

When using tab to the **computed**. We see the distinct box model areas. Every box model has a specific job. Look at the image below:
<figure align="center">
  <img src="./assets/the%20areas%20of%20the%20box%20model.png" alt="The areas of box model" />
  <figcaption>The areas of box model</figcaption>
</figure>

## Content box
Well, you knew the content can control the size of the box or its parent. So it is usually the most variably sized area.

## Padding box.
Surrounding the content box and the space created by the **padding** property. Because padding is inside the box so the background of the box will be visible in the space.
If the padding box has overflow rules set such as ***overflow: auto; overflow: scroll***. The srollbars will occupy this space.

## Border box
Surrounding the padding box and its space is occupied by the **border** value.
- Border box is the bounds of the box.
- Border edge is the limit of what we can visually see.
- **border** property is used to visually frame an element.

## Margin box
The space surrounds the our box and defined by the **margin** rule on the box.
Properties such as **outline** and **box-shadow** occupy this space.
They do not affect the size of the box.

## Controlling the box model.
- what happening if we do not have to control the box in the browser?
  - Every browser applies a user agent stylesheet to HTML documents and CSS used varies between each browser.
  - Browsers provide sensible defaults to make the content easier to read.
  - Browsers define how elements should look and behave if there is not CSS defined.

***Example:***

\- Some element with user agent stylesheet.

```css
/* div element */
div {
  display: block;
}

/* li element */
li {
  display: list-item;
}

/* span element */
span {
  display: inline;
}
```

\- p element with default value from user agent browser.

<figure align="center">
  <img src="./assets/user%20agent%20default%20value%20when%20browser%20is%20no%20CSS%20define.png" alt="p element user agent stylesheet when browser is not CSS defined." />
  <figcaption>p element user agent stylesheet when browser is not CSS defined.</figcaption>
</figure>


## box-sizing: content-box;
The CSS applies the **width** to the **content of box**, including the **border** and **padding**.

## box-sizing: border-box;
The CSS applies the **width** to the **border-box** instead the content box.

## Summary
The CSS Box Model is the common, we should understand it before we deep dive to learn CSS.