// console.log(document.getElementById("idone").innerHTML);
// console.log(document.getElementsByClassName("classone")[0].innerText);
//
// console.log(document.querySelector(".classone").innerText);
// console.log(document.querySelectorAll("p")[3].innerHTML);


let element = document.querySelectorAll('p');

element.forEach(function(item){
  item.textContent = 'I am changed using JS loop';
});

element.forEach((item) => {item.textContent = 'I am changed using JS arrow function'});

element.forEach(function(item, index)
{if (index == 2)
  item.textContent = 'Changed third para value via JS';
});


let newpara = document.createElement('p');
newpara.textContent = 'I am a para created by JS';
document.querySelector('body').appendChild(newpara);


document.querySelector('button').addEventListener('click',(event) =>
event.target.textContent='I was clicked');

document.querySelector('body').addEventListener('copy',function(myevent){
  //alert('copy not allowed');
  myevent.preventDefault();  //this does not allow that same event to occur. How cool!
})
