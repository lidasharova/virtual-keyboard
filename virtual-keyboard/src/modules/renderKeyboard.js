const container = document.body;

const templateHTML = ` <div class="wrapper">
    <h1 class="title">Виртуальная клавиатура</h1>
    <textarea class="textarea" name="text" id="text" cols="50" rows="5"></textarea>
    <div class="keyboard" id="keyboard">
      <div class="keyboard__row row">
        <div class="keyboard__key key Backquote">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit1">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit2">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit3">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit4">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit5">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit6">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit7">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit8">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit9">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Digit0">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Minus">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Equa">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Backspace">
          <span class="keyboard__key__text simbol">delete</span>
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key Tab">
          <span class="keyboard__key__text simbol">tab</span>
        </div>
        <div class="keyboard__key key KeyQ">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyW">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyE">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyR">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyT">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyY">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyU">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyI">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyO">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyP">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key BracketLeft">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key BracketRight">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Backslash">
          <span class="keyboard__key__text simbol">\</span>
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key CapsLock">
          <span class="keyboard__key__text simbol">caps lock</span>
        </div>
        <div class="keyboard__key key KeyA">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyS">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyD">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyF">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyG">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyH">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyJ">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyK">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyL">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Semicolon">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Quote">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Enter">
          <span class="keyboard__key__text simbol">return</span>
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key ShiftLeft">
          <span class="keyboard__key__text simbol">shift</span>
        </div>
        <div class="keyboard__key key KeyZ">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyX">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyC">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyV">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyB">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyN">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key KeyM">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Comma">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Period">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key Slash">
          <span class="keyboard__key__text simbol"></span>
        </div>
        <div class="keyboard__key key ShiftRight">
          <span class="keyboard__key__text simbol">shift</span>
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key Fn">
          <span class="keyboard__key__text simbol">fn</span>
        </div>
        <div class="keyboard__key key ControlLeft">
          <span class="keyboard__key__text simbol">control</span>
        </div>
        <div class="keyboard__key key AltLeft">
          <span class="keyboard__key__text simbol">option</span>
        </div>
        <div class="keyboard__key key MetaLeft">
          <span class="keyboard__key__text simbol">command</span>
        </div>
        <div class="keyboard__key key Space">
          <span class="keyboard__key__text simbol">space</span>
        </div>
        <div class="keyboard__key key MetaRight">
          <span class="keyboard__key__text simbol">command</span>
        </div>
        <div class="keyboard__key key AltRight">
          <span class="keyboard__key__text simbol">option</span>
        </div>
        <div class="keyboard__key key ArrowLeft">
          <span class="keyboard__key__text simbol">◄</span>
        </div>
        <div class="arrow__container">
          <div class="keyboard__key key ArrowUp">
            <span class="keyboard__key__text simbol">▲</span>
          </div>
          <div class="keyboard__key key ArrowDown">
            <span class="keyboard__key__text simbol">▼</span>
          </div>
        </div>
        <div class="keyboard__key key ArrowRight">
          <span class="keyboard__key__text simbol">►</span>
        </div>
      </div>
    </div>
        <p class="description">Клавиатура создана в операционной системе Mac OS</p>
        <p class="language">Для переключения языка: клавиша Fn в левом нижнем углу</p>
  </div>
`;
function renderKeyboard() {
  container.insertAdjacentHTML('beforeend', templateHTML);
}
export default renderKeyboard;
