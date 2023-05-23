const values = ['Los patitos feos', 'patitos', 'feos', 'titos', 'os']
const pattern = 'eo';


const filterWords = (values, pattern) => {
  const lower = pattern.toLowerCase();
  const lowerChars = lower.split(''); // ['e', 'o']
  
  for(let i = 0; i < values.length; i++) {
    const lowerWord = values[i].toLowerCase();

    for(let char of lowerChars) {
      if (lowerWord.indexOf(char) !== -1) {
        console.log(values[i]);
        break;
      }
    }
  
  }
}
console.log(filterWords(values, pattern));