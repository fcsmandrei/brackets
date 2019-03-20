module.exports = function check(str, bracketsConfig) {
  let strToArr = str.split("");
  let stackBrackets = [];
  let strLen =strToArr.length;
  let bracketsConfigLen =  bracketsConfig.length;
  let result;
  
  for(let j = 0; j < strLen; j++) {
    for( let i = 0; i < bracketsConfigLen; i++) {

      if(bracketsConfig[i][0] === strToArr[j]) {
          stackBrackets.push(strToArr[j]);
         if((stackBrackets[stackBrackets.length - 1] === stackBrackets[stackBrackets.length - 2]) && (bracketsConfig[i][0] === bracketsConfig[i][1])){
          stackBrackets.pop();
          stackBrackets.pop();
        }
      } else if (bracketsConfig[i][1] === strToArr[j] && bracketsConfig[i][0] == stackBrackets[stackBrackets.length - 1])  {
          stackBrackets.pop();
      }
      
    }   		
  }  	
  
  if(stackBrackets.length == 0 && strLen%2 == 0) {
  	result = true ;
  } else {
  	result = false;
  }

  return result;
}

