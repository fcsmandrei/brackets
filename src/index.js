module.exports = function check(str, bracketsConfig) {
  var strToArr = str.split("");
	var stackBrackets = [];
	var removeSlash;
	var result,
			result1;

	
  		
  for( var i = 0, bracketsConfigLen =  bracketsConfig.length; i < bracketsConfigLen; i++) {
  	for(var j = 0, strLen =strToArr.length; j < strLen; j++) {

  		if(bracketsConfig[i][0] === strToArr[j]) {
  			stackBrackets.push(strToArr[j]);
  		} else if (bracketsConfig[i][1] === strToArr[j] &&  stackBrackets.length > 0) {
  			stackBrackets.pop();
  		} 

  	}  	
  }
  for(var k=0; k < stackBrackets.length; k++) {
  	if(stackBrackets[k] == "|") {
  		delete stackBrackets[k];
  	}
  }

  var filtered = stackBrackets.filter(function (el) {
	  return el != null;
	});

  if(filtered.length == 0 ) {
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