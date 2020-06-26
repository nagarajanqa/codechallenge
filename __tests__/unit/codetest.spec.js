const codeLibrary = require("../../CodeLibrary");
describe("Verify whether the passed string is palindrome or not ", () => {
  it("Verify whether the passed string with case sensitive value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindrome('CiviC', false);
    expect(actVal).toBeTruthy();
  });

  it("Verify whether the passed string with case insensitive value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindrome('CiviC', true);
    expect(actVal).toBeTruthy();
  });

  it("Verify whether the passed string with special character value is palindrome", () => {
    let actVal = codeLibrary.isStrPalindrome('civic!@#');
    expect(actVal).toBeFalsy();
  });

  it("Verify that the passed string is empty", () => {
    let actVal = codeLibrary.isStrPalindrome('');
    expect(actVal).toBeFalsy();
  });

});

describe("To remove the extra whitespace from the given string", () => {
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