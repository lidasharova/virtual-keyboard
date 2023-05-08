import data from '../data.json';

function renderValueKeys(language) {
  const valueKeys = Object.entries(data);
  const keys = document.querySelectorAll('.key');

  for (let i = 0; i < keys.length; i++) {
    keys[i].innerText = `${valueKeys[i][1][language]}`;
  }
}

export default renderValueKeys;
