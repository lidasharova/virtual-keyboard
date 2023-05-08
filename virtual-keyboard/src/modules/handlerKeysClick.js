import renderValueKeys from './renderValueKeys.js';

function handlerKeysClick(language) {
  const keys = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');

  keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      const currentKey = event.target;
      currentKey.classList.add('active');
      setTimeout(() => {
        currentKey.classList.remove('active');
      }, 300);
      if (!currentKey.classList.contains('no-input')) {
        textarea.value += key.innerText;
      }
      if (
        currentKey.classList.contains('Fn') ||
        currentKey.classList.contains('CapsLock')
      ) {
        language = language === 'russian' ? 'english' : 'russian';
        renderValueKeys(language);
        localStorage.setItem('language', language);
      } else if (currentKey.classList.contains('Enter')) {
        textarea.value += '\n';
      } else if (currentKey.classList.contains('Tab')) {
        textarea.value += '    ';
      } else if (currentKey.classList.contains('Backspace')) {
        textarea.value = textarea.value.slice(0, -1);
      }
    });
  });
}

export default handlerKeysClick;
