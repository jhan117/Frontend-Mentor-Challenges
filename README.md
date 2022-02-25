# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Plan](#plan)
- [RWD](#rwd)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![desktop](./design/desktop-design.jpg)
![mobile](./design/mobile-design.jpg)

### Links

- Solution URL: [solution](https://your-solution-url.com)
- Live Site URL: [live site](https://jhan117.github.io/Stats-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- float

### What I learned

- mix-blend-mode
[CSS mix-blend-mode Property](https://www.w3schools.com/csSref/pr_mix-blend-mode.asp)

### Continued development

### Useful resources

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

## Plan

- RWD
1. float & percentage
2. flex with wrap
3. grid with wrap
4. grid with 12 columns

- Breakpoint: 1440px
- Use mix-blend-mode for image

[card list]
1. image
2. content
3. stats

## RWD

content : left
image : right

problem: float div height 0
1. `overflow: auto (or hidden);`

2. 
```HTML
<div id="outer">
    <div id="left">
         ...
    <div id="right">
    <div style="clear:both"></div>
</div>
```

3. set height
4. display : inline-block
5. set float