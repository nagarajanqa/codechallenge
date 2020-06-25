#  Testcase Coverage for the code challenge:

## To whether the passed string is palindrome or not
- Verify whether the passed string is palindrome or not
- Verify whether the passed string with case sensitive value is palindrome
- Verify whether the passed string with case insensitive value is palindrome
- Verify whether the passed string with special character value is palindrome
- Verify that the passed string is empty

## To remove the extra whitespace from a given string 
- Verify that the extra white space is removed in the string
- Verify that the all white spaces are removed in the string
- Verify that the passed string is empty

## To run the Test Script 
- Go to Terminal > Type npm run test-dev

## Dependencies

### CodeLibrary.js

```shell
exports.isStrPalindromeCaseSensitive = (str) => {
  let result = str;
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = c + str.charAt(i);
  }
   return str === '' ? false : result === c;
}
```

```shell
exports.isStrPalindromeCaseInSensitive = (str) => {
  str=str.toLowerCase();
  let result = str;
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = c + str.charAt(i);
  }
   return str === '' ? false : result === c;
}
```

```shell
exports.removeExtraWhiteSpace = (str) => {
  if (str === '') {
    return 'Passed string is empty';
  } 
    return str.replace(/\s+/g, ' ').trim(); 
}
```

```shell
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
```

### codetest.spec.js > Palindrome Check

```shell
describe("Verify whether the passed string is palindrome or not ", () => {
  it("Verify whether the passed string with case sensitive value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindromeCaseSensitive('radar');
    expect(actVal).toBeTruthy();
  });

  it("Verify whether the passed string with case insensitive value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindromeCaseInSensitive('CiviC');
    expect(actVal).toBeTruthy();
  });  

  it("Verify whether the passed string with special character value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindromeCaseInSensitive('civic!@#');
    expect(actVal).toBeFalsy();
  });  

  it("Verify that the passed string is empty", () => {    
    let actVal = codeLibrary.isStrPalindromeCaseInSensitive('');
    expect(actVal).toBeFalsy();
  }); 

});
```

### codetest.spec.js > Remove Extra Whitespace
```shell
describe("To remove the extra whitespace from a given string", () => { 
  it("Verify that the extra white space is removed in the string", () => {
    let strVal = ' this is a first node script ';
    let expVal = 'this is a first node script';
    let actVal = codeLibrary.removeExtraWhiteSpace(strVal);    
    expect(actVal).toBe(expVal)    
  });

   it("Verify that the all white spaces are removed in the string", () => {
    let strVal = ' this is a first node script ';
    let expVal = 'thisisafirstnodescript';
    let actVal = codeLibrary.removeAllWhiteSpaces(strVal);
    expect(actVal).toBe(expVal)    
  });

  it("Verify that the passed string is empty", () => {
    let actVal = codeLibrary.removeExtraWhiteSpace('');
    expect(actVal).toBe('Passed string is empty')    
  });

});
```
