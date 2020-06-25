exports.isStrPalindromeCaseSensitive = (str) => {
  let result = str;
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = c + str.charAt(i);
  }
   return str === '' ? false : result === c;
}

exports.isStrPalindromeCaseInSensitive = (str) => {
  str=str.toLowerCase();
  let result = str;
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = c + str.charAt(i);
  }
   return str === '' ? false : result === c;
}

exports.removeExtraWhiteSpace = (str) => {
  if (str === '') {
    return 'Passed string is empty';
  } 
    return str.replace(/\s+/g, ' ').trim(); 
}

exports.removeAllWhiteSpaces = (str) => {
  let arr = str.split(" ")
  let result = "";
  for (i = 0; i < arr.length; i++) { 
    if( arr[i]!==" ")
    {   
      result = result + arr[i]; 
    }  
  }
  return result;
}
