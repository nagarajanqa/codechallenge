const codeLibrary = require("./CodeLibrary");
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