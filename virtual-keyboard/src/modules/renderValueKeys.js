import data from '../data.json';
const valueKeys = data;

console.log(valueKeys);
function renderValueKeys(language){
  let i = 0;
  for(let key in valueKeys){
    let keys = document.querySelectorAll(".key");
    console.log(keys);
    i++;
  }
}


export default renderValueKeys;


