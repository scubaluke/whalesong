
//let input = 'bre loves luke';

const vowels = ['a','e','i','o','u'];
const whaleSong = () => {
  let input = document.querySelector('#speak').value;
  let print = document.querySelector('#print1');

let resultArray = [];

for ( let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++ ){

  if (input[i] === vowels[j] ){ 
    resultArray.push(input[i])}}
    {
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
 if (input[i] === 'u'){resultArray.push(input[i])}

    }  
  }
  return print.innerHTML = resultArray.join('').toUpperCase();
  //console.log(whaleSong());

}

//console.log(whaleSong());

// Dark Mode**********
const toggleDarkLight = () => {
  let body = document.getElementById('body');
  let currnetClass = body.className;
  body.className = currnetClass == "darkMode" ? "lightMode" : "darkMode";

}