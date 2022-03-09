# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./design/mobile-design.jpg)
![](./design/mobile-error-state.jpg)
![](./design/desktop-design.jpg)
![](./design/desktop-hover-error-states.jpg)

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live site]()

## My process

**2022.03.09**
   
- header (content + form)
- main (image)
- footer (sns + copyright)
   
Started: 오늘 대통령 선거날이라 투표도 하고 놀다 와서 늦게 시작함. 암튼 일단 반응형은 input이랑 버튼만 grid. 에러는 비어 있을 때랑 형식 안 맞을 때 문구는 하나라서 for 구문 없이 그냥 if로 submit 이벤트 들어오면 함수 주면 될듯.
   
Completed: 저번에 했던 거랑 유사해서 기억을 더듬어서 쉽게 했다. hover 기능, email 형식이나 비어 있으면 각각의 에러 메시지 생성 등. 위에서 원하는대로 구현 했다.

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- GitHub - [@2001Kaye](https://github.com/jhan117)