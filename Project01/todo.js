var addbutton = document.getElementById('add');
var remove = document.getElementById('remove');
var checkedbox = document.getElementById('list');
var li = checkedbox.children;

addbutton.addEventListener('click',(event) => {
  let a = document.getElementById('input').value;
  if(a === '' || a === ' '){
    let b = document.createElement('p');
    b.textContent = "Enter your Todo";
    b.id = 'alertpara';
    document.getElementById('container').appendChild(b);
    setTimeout(()=>document.getElementById('alertpara').remove(),3000);
    return false;
  }else {
    let label = document.createElement('label');
    var textnode = document.createTextNode(a);
    label.className = 'mycheck';

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.setAttribute('id','check');

    let list = document.createElement('li');

    checkedbox.appendChild(list);
    list.appendChild(input);
    label.appendChild(textnode);
    list.appendChild(label);
    checkedbox.insertBefore(list, checkedbox.childNodes[0]);
    list.className = 'visual';

  }

});

remove.addEventListener('click', (event) => {
  for (var i = 0; i < li.length; i++) {
    //console.log(li);
    while(li[i] && li[i].children[0].checked){
      checkedbox.removeChild(li[i]);
    }
  }
});
