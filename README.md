# Frontend Mentor - Equalizer landing page solution

This is a solution to the [Equalizer landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/equalizer-landing-page-7VJ4gp3DE). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./design/mobile-design.jpg)
![](./design/tablet-design.jpg)
![](./design/desktop-design.jpg)
![](./design/active-states.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/equalizerlandingpage-juNI6TS15)
- Live Site URL: [Live site](https://jhan117.github.io/Equalizer-landing-page/)

## My process

**2022.02.08**
   
1. main (include logo)
2. design box
3. footer (include logo)
   
Updated : Use max-width and position for RWD. and rebuilding code.
   
Completed: It was too difficult to the overlapping part.

### What I learned

[**CSS Syntax**](https://www.w3schools.com/cssref/pr_pos_z-index.asp)

```
z-index: auto|number|initial|inherit;
```

**Property Values**
| Value | Description |
| ----- | ----------- |
| auto | Sets the stack order equal to its parents. This is default
| number | Sets the stack order of the element. Negative numbers are allowed |
| initial | Sets this property to its default value. |
| inherit | Inherits this property from its parent element. |
   
[**Inline SVG**](https://css-tricks.com/change-color-of-svg-on-hover/)
In HTML
```HTML
<div>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d=""/>
  </svg>
</div>
```
In CSS
```CSS
svg:hover {
  fill: red;
}
```

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- GitHub - [@2001Kaye](https://github.com/jhan117)
