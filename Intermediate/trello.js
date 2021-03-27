/*let days= new Date();
let day= days.getDay();
console.log(day);
for (var i = 0; i < day.length; i++) {
  console.log(day[i]);
}
*/

const myTodos = [];
myTodos.push('Buid a dynamic site');
myTodos.push('Master the front end techs');
myTodos.push('Enter Sage mode');


myTodos.forEach(function(tiger,index)
{
  console.log(`Your task no. ${index+1} is ${tiger}`);
});
