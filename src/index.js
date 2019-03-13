module.exports = function check(str, bracketsConfig) {
  var strToArr = str.split("");
	var stackBrackets = [];
	var removeSlash;
	var result,
			result1;

	
  		
  
  	for(var j = 0, strLen =strToArr.length; j < strLen; j++) {
      for( var i = 0, bracketsConfigLen =  bracketsConfig.length; i < bracketsConfigLen; i++) {
        
        if(bracketsConfig[i][0] === strToArr[j]) {
  			stackBrackets.push(strToArr[j]);
           if(stackBrackets[stackBrackets.length - 1] =="|" && stackBrackets[stackBrackets.length - 2] == "|"){
            stackBrackets.pop();
            stackBrackets.pop();
          }
  		} else if (bracketsConfig[i][1] === strToArr[j] && bracketsConfig[i][0] == stackBrackets[stackBrackets.length - 1])  {
  			stackBrackets.pop();
  		} else { result1 = false;}      
      }   		
  	}  	

  
  if(stackBrackets.length == 0 ) {
  	result = true ;
  } else {
  	result = false;
  }

  return result;
}

/*check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true*/