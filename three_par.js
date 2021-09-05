const sentence = 'Your are super programmer';
const numberOfLetter = 2;
const replaced = 'NOT';
let result; 

function Replacer(parametr1, parametr2, parametr3) {
let functionResult = ''
let functionResult1 = ''
let arr = parametr1.split(' ')
let first = arr[0].split('')
for (let i=0; i<[first].length; i++) {
  first[parametr2-1] = parametr3;
  for (let j=0; j<first.length; j++) {
    functionResult = functionResult + first[j]
  }

  functionResult1 = functionResult + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3]
  
  }

return functionResult1
}
result=Replacer(sentence, numberOfLetter, replaced);

console.log(result);