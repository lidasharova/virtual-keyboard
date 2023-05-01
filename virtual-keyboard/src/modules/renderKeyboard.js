const container = document.body;

const templateHTML = ` <div class="wrapper">
    <h1 class="title">Виртуальная клавиатура</h1>
    <textarea class="textarea" name="text" id="text" cols="50" rows="5"></textarea>
    <div class="keyboard" id="keyboard">
      <div class="keyboard__row row">
        <div class="keyboard__key key Backquote">
        </div>
        <div class="keyboard__key key Digit1">
        </div>
        <div class="keyboard__key key Digit2">
        </div>
        <div class="keyboard__key key Digit3">
        </div>
        <div class="keyboard__key key Digit4">
        </div>
        <div class="keyboard__key key Digit5">
        </div>
        <div class="keyboard__key key Digit6">
        </div>
        <div class="keyboard__key key Digit7">
        </div>
        <div class="keyboard__key key Digit8">
        </div>
        <div class="keyboard__key key Digit9">
        </div>
        <div class="keyboard__key key Digit0">
        </div>
        <div class="keyboard__key key Minus">
        </div>
        <div class="keyboard__key key Equa">
        </div>
        <div class="keyboard__key key no-input Backspace">
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key no-input Tab">
        </div>
        <div class="keyboard__key key KeyQ">
        </div>
        <div class="keyboard__key key KeyW">
        </div>
        <div class="keyboard__key key KeyE">
        </div>
        <div class="keyboard__key key KeyR">
        </div>
        <div class="keyboard__key key KeyT">
        </div>
        <div class="keyboard__key key KeyY">
        </div>
        <div class="keyboard__key key KeyU">
        </div>
        <div class="keyboard__key key KeyI">
        </div>
        <div class="keyboard__key key KeyO">
        </div>
        <div class="keyboard__key key KeyP">
        </div>
        <div class="keyboard__key key BracketLeft">
        </div>
        <div class="keyboard__key key BracketRight">
        </div>
        <div class="keyboard__key key Backslash">
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key no-input CapsLock">
        </div>
        <div class="keyboard__key key KeyA">
        </div>
        <div class="keyboard__key key KeyS">
        </div>
        <div class="keyboard__key key KeyD">
        </div>
        <div class="keyboard__key key KeyF">
        </div>
        <div class="keyboard__key key KeyG">
        </div>
        <div class="keyboard__key key KeyH">
        </div>
        <div class="keyboard__key key KeyJ">
        </div>
        <div class="keyboard__key key KeyK">
        </div>
        <div class="keyboard__key key KeyL">
        </div>
        <div class="keyboard__key key Semicolon">
        </div>
        <div class="keyboard__key key Quote">
        </div>
        <div class="keyboard__key key no-input Enter">
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key no-input ShiftLeft">
        </div>
        <div class="keyboard__key key KeyZ">
        </div>
        <div class="keyboard__key key KeyX">
        </div>
        <div class="keyboard__key key KeyC">
        </div>
        <div class="keyboard__key key KeyV">
        </div>
        <div class="keyboard__key key KeyB">
        </div>
        <div class="keyboard__key key KeyN">
        </div>
        <div class="keyboard__key key KeyM">
        </div>
        <div class="keyboard__key key Comma">
        </div>
        <div class="keyboard__key key Period">
        </div>
        <div class="keyboard__key key Slash">
        </div>
        <div class="keyboard__key key no-input ShiftRight">
        </div>
      </div>
      <div class="keyboard__row row">
        <div class="keyboard__key key no-input Fn">
        </div>
        <div class="keyboard__key key no-input ControlLeft">
        </div>
        <div class="keyboard__key key no-input AltLeft">
        </div>
        <div class="keyboard__key key no-input MetaLeft">
        </div>
        <div class="keyboard__key key no-input Space">
        </div>
        <div class="keyboard__key key no-input MetaRight">
        </div>
        <div class="keyboard__key key no-input AltRight">
        </div>
        <div class="keyboard__key key arrow ArrowLeft">
        </div>
        <div class="arrow__container">
          <div class="keyboard__key key arrow ArrowUp">
          </div>
          <div class="keyboard__key key arrow ArrowDown">
          </div>
        </div>
        <div class="keyboard__key key arrow ArrowRight">
        </div>
      </div>
    </div>
        <p class="description">Клавиатура создана в операционной системе Mac OS.</p>
        <p class="language">Для переключения языка: клавиша caps lock.</p>
        <p class="language">Нижние клавиши fn, control, option, command не выполняют никакой ф-ции.</p>
  </div>
`;
function renderKeyboard() {
  container.insertAdjacentHTML('beforeend', templateHTML);
}
export default renderKeyboard;