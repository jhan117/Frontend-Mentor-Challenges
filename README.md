# Frontend Mentor - Typemaster pre-launch landing page solution

This is a solution to the [Typemaster pre-launch landing page challenge on Frontend Mentor](). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Typemaster pre-launch landing page solution](#frontend-mentor---typemaster-pre-launch-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](/design/mobile_design.png)
![](/design/tablet.design.png)
![](/design/desktop_design.png)
![](/design/active_state.png)

### Links

- Solution URL: [solution](https://www.frontendmentor.io/solutions/typemaster-prelaunch-landing-page-ryxlWmJm9)
- Live Site URL: [live site](https://jhan117.github.io/Typemaster-pre-launch-landing-page/)

## My process

**2022.03.17**

Started: 내 생각엔 이거... 초반에 구조를 대강 잡고 큰 틀만 잡고 시작했더니 나중에 추가해야 할게 너무 많아졌다. 복잡한 건 딱 질색이라 처음에 시간을 쓰더라도 구조는 조금 파고 들어야 겠다. bootstrap을 틈틈히 공부하다가 grid system 보고 좀 맘에 들어서 조금... 써볼까...? image 진짜... 시간 많이 써서 고민했다. 자세한 건 배운 것에 쓰겠다.

**2022.03.21**

챌린지 빡세게 굴리느라 바빴다. 아직 미완이고 수정해야 할 거 많은데 이제 본업에 들어가야 해서 이거 올리고 컴터 포맷할 예정이다 나중에 본업 조금 안정되면 와야지 ㅠㅠ 좀 많이 아쉽다.

**2022.03.28**  
Completed: 드.. 드디어 다했다 ㅋㅋㅋㅋ 계속 미루다가... ㅋㅋㅋㅋ 결국 12 columns으로 나눠서 하는게 제일 이쁘더라~

need to be fixed: 왠지 몰라도 배경에 박스가 포함이 안됨 나중에 수정해야지 첫번째 이미지 왼쪽 글자 위치도 쪼매 올리자

### Built with

- HTML
- CSS
  - SCSS
- Mobile-first workflow

### What I learned

#### image positioning

img tag로 불러올까 background-image로 불러올까 정말 많은 고민을 했다. 디자인 요소이고 중요하지 않지만... 거의 대부분 사진이 심미적인 요소 아닌가...? 쓰읍... img로 쓰자니 html이 지저분해지고 background로 불러오자니 기능이 너무 제한적이라 너무 힘들다. 그래서 그냥 img tag로 때려 박았다.

그리고 위치 잡기가 좀 어려웠다. position으로 하기에는 grid 무시하는 게 너무 싫었고 해서 대충 비율 계산해서 최대한 비슷하게 1:1.7로 했다. 나름 만족한다. 원하는대로 나와서

#### object-fit

The `object-fit` CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

[Syntax]

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: unset;
```

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- GitHub - [@2001Kaye](https://github.com/jhan117)
