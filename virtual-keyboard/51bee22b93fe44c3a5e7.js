import"../src/index.html";import"../src/sass/style.scss";import renderKeyboard from"./modules/renderKeyboard.js";import renderValueKeys from"./modules/renderValueKeys.js";import handlerKeysClick from"./modules/handlerKeysClick.js";import{handlerKeysKeyDown}from"./modules/handlerKeysKeyDown.js";document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".textarea").focus()}));const language=localStorage.getItem("language")||"english";renderKeyboard(),renderValueKeys(language),handlerKeysClick(language),handlerKeysKeyDown(language);