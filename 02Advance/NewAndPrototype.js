var User = function(name,age){
  this.name = name;
  this.age = age;
  this.Data = `Name is ${this.name} and age is ${this.age}`;
}

User.prototype.ShowData = function(){  //Adding your own method to prototype
  console.log(this.Data);
};

var user1 = new User('Kakashi',35);   //creating new user of User object
if(user1.hasOwnProperty("Data"))  //checking whether the Data property exists
{ user1.ShowData(); }

var user2 = new User('Guy',36);
user2.ShowData();

console.log(User.prototype); //to view prototype object

var user3 = {   //a normal object is created this way with comma separated
  name : 'Hello',
  age : 25,
};

var user4 = Object.create(user3); //creating object of above parent normal object
user4.name = 'Jiraya';
user4.age = 70;
console.log(user4);
