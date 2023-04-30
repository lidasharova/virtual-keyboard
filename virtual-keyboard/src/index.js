import '../src/index.html';
import '../src/sass/style.scss';
// import '@babel/polyfill';

import renderKeyboard from './modules/renderKeyboard.js';
import renderValueKeys from './modules/renderValueKeys.js';

let language = 'english';

renderKeyboard();
renderValueKeys(language);
