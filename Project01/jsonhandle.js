var li = document.getElementById('list').children;
var data = [];
for (var i = 0; i < li.length; i++) {
  data[i] = li[i].outerText;
}
var data = JSON.stringify(data);          //Convert to string from array
localStorage.setItem('key1',data);        //Then add it to localStorage
//var b = localStorage.getItem('key1');
//var a = JSON.parse(b);                  //Passing back to JSON(array)
