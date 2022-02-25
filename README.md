# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./design/desktop-design.png)
![](./design/mobile-design.png)
![](./design/active-states.jpg "active guide picture")

### Links

- Solution URL: [solution](https://www.frontendmentor.io/solutions/order-summary-HpW1zvHOH)
- Live Site URL: [live site](https://jhan117.github.io/Order-summary-component/)

## My process

**Updated 2022.Feb.25**   

[List]
- card
- image
- content
- plan
- button
- cancel

[순서]
1. 카드 구성 파악
2. grid로 카드 중앙 정렬
3. 반응형을 grid로

[끄적끄적]   
padding으로만 반응형을 만들기에는 조금씩 문제가 보이는 것 같다... 물론 breakpoint를 적게 줘서 그런 것 같기도 한데 조금은 어렵다. 특히 width 값을 어떻게 줘야 하는지가 어렵다. 적당히 여백도 있으면서 어떻게 넣으라는거지??? %로 해볼까 했는데 디자인대로 정확히 하고 싶어서 계산해봤는데 오차가 심해서... 음... 역시... 카드라서 그런가 싶기도 하고... 경험이 필요할 것 같다. 계속해서 연구해보자.

**Updated 2022.Feb.26**   
고민하다가 갑자기 생각난건데 레이아웃이 안 변하고 크기 변화도 적은 카드에는 RWD가 굳이~~~ 필요해 보이진 않아 보인다. 안 이쁘기도 해서 max-width로 적당히만 주는게 best이지 않을까? 싶었다.
   
(결론)
맞다. ㅋㅋㅋ padding보다는 max-width가 나은 것 같다. 디자인에 따라 적절히 활용하자

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- Twitter - [@2001Kaye](https://github.com/jhan117)