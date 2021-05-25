const firstDiv = document.getElementById('colorRed');
const secDiv = document.getElementById('noColorDiv');
var getComputedValue = (selectedElement)=>{
  console.log(window.getComputedStyle(selectedElement).backgroundColor);
  /*Here while calling computed value, the property will replace hypen'-' with
  capital letter, ex: background-color to backgroundColor  */
}


getComputedValue(firstDiv);

secDiv.addEventListener('click',()=>{
  secDiv.style.background = window.getComputedStyle(firstDiv).backgroundColor;
});
