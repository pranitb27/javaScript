class User{
  constructor(firstName,lastName,credit){
    this.firstName = firstName;
    this.lastName = lastName;
    this.credit = credit;
  }

getFullName = () => `My fullname is ${this.firstName} ${this.lastName} .`;

editName(newName){
  let myarray = newName.split(' ');
  this.firstName = myarray[0];
  this.lastName = myarray[1];
}
}

class Teacher extends User{
  constructor(firstName,lastName,credit,subject){
    super(firstName,lastName,credit);
    this.subject = subject;
  }

  getFullName = () => `My fullname is ${this.firstName} ${this.lastName} \
& I teach ${this.subject} .`;
}

const john = new Teacher('John','Anderson',50,'Computer Science');
console.log(john);
console.log(john.getFullName());
john.editName('Sammy Anderson');
console.log(john.getFullName());
