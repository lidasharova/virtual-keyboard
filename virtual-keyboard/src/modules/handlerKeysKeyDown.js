import data from '../data.json';
import renderValueKeys from './renderValueKeys.js';

function handlerKeysKeyDown(language) {
  let shiftPressed = false;
  document.addEventListener('keydown', (event) => {
    const valueKeys = Object.entries(data);
    const textarea = document.querySelector('.textarea');
    const pressedKey = event.code;
    const currentKey = document.querySelector(`.key.${pressedKey}`);

    currentKey.classList.add('active');
    setTimeout(() => {
      currentKey.classList.remove('active');
    }, 400);

    if (pressedKey === 'Tab') {
      event.preventDefault();
      textarea.value += '    ';
    } else if (pressedKey === 'Backspace') {
      event.preventDefault();
      textarea.value = textarea.value.slice(0, -1);
    } else if (pressedKey === 'Enter') {
      event.preventDefault();
      textarea.value += '\n';
    } else if (pressedKey === 'CapsLock' || pressedKey === 'Fn') {
      event.preventDefault();
      language = language === 'russian' ? 'english' : 'russian';
      renderValueKeys(language);
      localStorage.setItem('language', language);
    } else if (pressedKey === 'ShiftLeft') {
      event.preventDefault();
      shiftPressed = true;
    } else if (pressedKey === 'ShiftRight') {
      event.preventDefault();
      shiftPressed = true;
    } else if (pressedKey === 'AltRight') {
      event.preventDefault();
    } else if (pressedKey === 'AltLeft') {
      event.preventDefault();
    } else if (pressedKey === 'MetaLeft') {
      event.preventDefault();
    } else if (pressedKey === 'MetaRight') {
      event.preventDefault();
    } else if (pressedKey === 'ControlLeft') {
      event.preventDefault();
    } else if (event.shiftKey && !currentKey.classList.contains('no-input')) {
      const value = valueKeys.find(([key]) => key == pressedKey)[1][
        `shift-${language}`
      ];
      if (!shiftPressed) {
        textarea.value += value;
      }
    } else {
      const value = valueKeys.find(([key]) => key == pressedKey)[1][language];
      if (!shiftPressed) {
        textarea.value += value;
      }
    }
  });
}

export { handlerKeysKeyDown };
