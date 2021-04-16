function myValidation(){
  document.querySelector('input').addEventListener('input',(event)=>{
    let value = event.target.value;
    if (isNaN(value) || value < 0 || value > 20){
      document.getElementById('idone').textContent = 'Is not valid input';
    }
    else{
      document.getElementById('idone').textContent = 'This input is ok';
    }
  });
}

document.querySelector('.myform').addEventListener('submit',(event) => {
  let a = event.target.username.value;
  let b = event.target.realname.value;
  if (a !== b){
    event.preventDefault();
    addNewPara("The username and realname does not match");
  }
  else {
      console.log("Data sumbitted : " + a + " " + b);
      addNewPara("Data sumbitted : " + a + " " + b);
  }
})

function addNewPara(para){
  let newpara = document.createElement('p');
  newpara.textContent = para;
  document.querySelector('body').appendChild(newpara);
}
