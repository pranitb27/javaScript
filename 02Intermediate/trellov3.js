let cars = [
  {
    title : 'Fiat',
    status : 'running',
  },
  {
    title : 'Chev',
    status : 'down',
  },
  {
    title : 'Honda',
    status : 'running',
  }];

var findCarStatus = function(mycars,input)
{
   let index = mycars.findIndex(function(car, index){
     return car.title.toLowerCase() === input.toLowerCase();
   });
   return mycars[index].status;
};

//console.log(findCarStatus(cars,'Fiat'));
//Normal function
var findCarName = (cars, input) => {
  let data = cars.filter(function(car){ return car.status === input});
  if (data.length > 0){
    data.forEach((item, i) => console.log(item.title));
}
}
findCarName(cars,'running');

//Arrow function
var findCarDetail = (cars, input) => cars.filter((car) => car.status === input)
//console.log(findCarDetail(cars,'running'));
