const Superheroes = ['Superman','Captain Ameria','Batman','Ironman'];

console.log(Superheroes);
console.log(Superheroes.valueOf());

for(let i=0;i<Superheroes.length;i++)
{
  if(Superheroes[i] == 'Batman')
    {console.log(Superheroes[i]);
    Superheroes[i]='Thor'; }
}
console.log(Superheroes);
console.log(`We have ${Superheroes.length} Superheroes on our side`);

console.log('Shifted : '+Superheroes.shift());
printer();
console.log('Unshifted : '+Superheroes.unshift('Shaktiman'));
printer();
console.log('Popped : '+ Superheroes.pop());
printer();
console.log('Pushed : '+ Superheroes.push('Saitama'));
console.log('Splicing : '+Superheroes.splice(1,2,'Luffy','Zoro'));
printer();

function printer() {
  var a=Superheroes.entries();
  for(x of a)
  console.log(x);
}
console.log("\nNinja way is here\n");
Superheroes[Superheroes.length]= "Naruto";
printer();
