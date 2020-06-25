exports.isStrPalindrome = (str) => {
  let result = '';
  if (str == '') {
    result = 'Passed string is empty';
  } else if (str.indexOf(' ') !== -1) {
    result = 'Passed string has space';
  } else if (str.length < 3) {
    result = 'String length is less than 3, not valid for palindrome check';
  } else if (!isNaN(str)) {
    result = 'Entered value is a number';
  } else if (/^[a-zA-Z0-9]*$/.test(str) == false) {
    result = 'String has special characters';
  } else {
    let c = '';
    for (let i = str.length - 1; i >= 0; i--) {
      c = c + str.charAt(i);
    }
    result = c;
  }
  return result;
}

exports.removeExtraWhiteSpace = (str) => {
  let result = '';
  if (str == '') {
    result = 'Passed string is empty';
  }
  else if (!isNaN(str)) {
    result = 'Entered value is a number';
  } 
  else
  {
  result = str.replace(/\s+/g, ' ').trim();
  }
  return result;
}
