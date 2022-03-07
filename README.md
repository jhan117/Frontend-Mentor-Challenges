# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/mobile-design.jpg)
![](./design/desktop-design.jpg)
![](./design/active-states.jpg)

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live site]()

## My process

**2022.03.07**

- content
- sign up form

Started: 어제 했던 거랑 유사하다. 그러나 조금 요구하는게 많은데 뭐 대충 하면 되겠지. 자세히 보니까 오류 메시지 나올 때 길어지네 display로 해야겠다.

Completed: 나름... 뿌듯한걸...? ㅋㅋㅋ `addEventListener`를 input에 넣었는데 안돼가지고 좀 애먹었다. form에 넣으면 되는 걸... 몰랐다... 사실 지금 써놓은 js 파일이 완전히 내가 원하는 코드인데 뭔가 잘 안되고 머릿속도 꼬여서 어디부터 시작해야 할까 애먹었다. 유튜브도 엄청 찾아보고 막 뒤져도 오류가 계속 생기길래 차근차근 종이에 어떻게 하길 원하는지 적어놓고 몇 번을 console.log로 찍고 했다. 결론은 원하는 곳에 이르렀지만 오류는 submit할 때 생기는 새로고침 때문에 일어난 일이었다... 여튼 이리 저리 해보다가 좀 많은 지식을 얻은 것 같아서 뿌듯. 아 맞다. 처음에는 console.log를 잘 안 찍었다. 어캐 해야 하는지 몰라서 일단 작성해놓으니 안되가지고 다시 지우고 어떤 값을 찍는거지? 하며 console.log로 차근히 했던게 해결할 수 있었던 방법이었다. 너무 신기했다... js에 대해서 더 알게 된 계기가 된 거 같아서 너무 좋다.

### What I learned

[Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)   
The `preventDefault()` method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
   
The `novalidate` attribute is a boolean attribute.
   
[What exactly is the parameter e (event) and why pass it to JavaScript functions?](https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions)   
The handler is simply a function which does something (it's executed) when the event happens. The handler function, by default, when executed is passed the event object (that was created when the event/action you are interested in happened) as an argument. Defining the event as a parameter of your handler function is optional but, sometimes (most times), it is useful for the handler function to know about the event that happened. When you do define it this is the e you see in the functions like the ones you mentioned. Remember, the event is just a regular javascript object, with lots of properties on it.

## Author

- Frontend Mentor - [@2001Kaye](https://www.frontendmentor.io/profile/jhan117)
- GitHub - [@2001Kaye](https://github.com/jhan117)