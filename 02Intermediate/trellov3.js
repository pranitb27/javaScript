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

console.log(findCarStatus(cars,'Fiat'));
