my2ndobj = {
  meetings : 0,
  meetingsDone : 0,
  summary : function (num1, num2) {
    this.meetings = num1;
    this.meetingsDone = num2;
    console.log(`meetings are ${this.meetings} & Done are ${this.meetingsDone}`);
  }
};

my2ndobj.summary(5,2);
