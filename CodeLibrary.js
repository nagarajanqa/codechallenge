/**
 * 
 * @param {*} str 
 * @param {*} caseInSensitive 
 * This method checks the given string is palindrome or not based on the caseInSensitive flag.
 */
exports.isStrPalindrome = (str, caseInSensitive) => {
  str = caseInSensitive ? str : str.toLowerCase();
  let result = str;
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = c + str.charAt(i);
  }
  return str === '' ? false : result === c;
}
/**
 * 
 * @param {*} str 
 * * This method removes the Extra white space from the passed string.
 */
exports.removeExtraWhiteSpace = (str) => {
  if (str === '') {
    return 'Passed string is empty';
  }
  return str.replace(/\s+/g, ' ').trim();
}
/**
 * 
 * @param {*} str 
 * *  This method removes all the white spaces from the passed string.
 */
exports.removeAllWhiteSpaces = (str) => {
  let arr = str.split(" ")
  let result = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      result = result + arr[i];
    }
  }
  return result;
}