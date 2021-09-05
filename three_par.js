const sentence = 'Your are super programmer';
const numberOfLetter = 2;
const replaced = 'NOT';
let result; 

function Replacer(parametr1, parametr2, parametr3) {
let functionResult = ''
let arr = parametr1.split(' ') 
for (let i=0; i<arr.length; i++) {
  let arrSplit1 = arr[i].split('')
  arrSplit1[parametr2-1] = parametr3;
  for (let j=0; j<arrSplit1.length; j++) {
    functionResult = functionResult + arrSplit1[j]
  }
  if (i !== arr.length - 1){
    functionResult = functionResult + ' '
  }
}
return functionResult
}
result=Replacer(sentence, numberOfLetter, replaced);

console.log(result);