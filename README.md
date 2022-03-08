# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./design/mobile-design.jpg)
![](./design/desktop-design.jpg)
![](./design/active-states.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/faq-accordion-card-tQNpBF1IR)
- Live Site URL: [Add live site URL here](https://jhan117.github.io/FAQ-accordion-card/)

## My process

**2022.03.08**

- image
- card
  - heading
  - contents

Started: 음.. accordion이라... 일단 js로 먼저 하고 branch 파서 css만 해봐야겠다. 내용은 display로 주고 기호는 rotate로 해주면 되고 효과를 위해서 transition 넣어주면 될듯.

Completed: 음 accordion이라고 쳤더니 너무 좋은 소스가 많아서 고민할 시간은 별로 없었다. 그래서 원리만 이해하고 내 맘대로 써봤다. 근데 고민인게 html에 div를 저렇게 많이 넣어도 괜찮을까? 없애자니 너무 구분이 없고 그렇다고 넣자니 너무 많아보이는...? 가독성을 위해서는 그냥 냅두는 게 좋을까? 찾아봤더니 다른 걸로 대신해서 쓰면 좋다는데... 흐음... 아직은 잘 모르겠다. 뭐가 적절한지를 모르겠네. 어려웠다기 보다는 transition 처음 써봐서 smooth한 효과를 위해 여러번 테스트해본다고 조금 시간을 먹었다. 무난했던...?

### What I learned

[pure css accordion](https://codepen.io/raubaca/pen/PZzpVe)  
[accordion with js](https://www.w3schools.com/howto/howto_js_accordion.asp)

**CSS Transition**
| Property | Description |
| -------- | ----------- |
| transition | A shorthand property for setting the four transition properties into a single property |
| transition-delay | Specifies a delay (in seconds) for the transition effect |
| transition-duration | Specifies how many seconds or milliseconds a transition effect takes to complete |
| transition-property | Specifies the name of the CSS property the transition effect is for |
| transition-timing-function | Specifies the speed curve of the transition effect |
   
[HTML DOM Element nextElementSibling](https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp)
   
**Definition and Usage**   
The `nextElementSibling` property returns the next element in the same tree level. and it's read-only.
   
**Syntax**

```JS
element.nextElementSibling
```
   
**Return Value**
| Type | Description |
| ---- | ----------- |
| Element | The next sibling element. `null` if no next sibling exists. |

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- GitHub - [@2001Kaye](https://github.com/jhan117)
