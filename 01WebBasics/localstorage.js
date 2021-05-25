document.querySelector('#myinputbox').addEventListener('input',(event)=>{
  var mydata = event.target.value;
  localStorage.setItem('key1',mydata);
  console.log('Added : ' + mydata);
  setTimeout(()=>{document.getElementsByName('username'.value = mydata)},2000);
  setTimeout(()=>localStorage.removeItem('key1'),5000);
});
