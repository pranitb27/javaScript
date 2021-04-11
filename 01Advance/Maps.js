let bike1 = {
  name : 'MT09',
  company : 'Yamaha',
};

let bike2 = {
  name : 'CB650R',
  company : 'Honda'
};

let bike3 = {
  name : 'GSX',
  company : 'Suzuki'
};

let bikes = new Map();
bikes.set('bike1', bike1);
bikes.set('bike2', bike2);

console.log(bikes.size);
console.log(bikes.keys());
console.log(bikes.values());
console.log(bikes.entries());

for (var value of bikes.values()) {
  console.log(`${value.name} belongs to ${value.company}`);
}

for (var [key,value] of bikes.entries()) {
  console.log(`Key name ${key}: ${value.name} belongs to ${value.company}`);
}

console.log('\nusing For forEach loop');
bikes.forEach((value, key) => {
  console.log(`Key name ${key}: ${value.name} belongs to ${value.company}`);
});
