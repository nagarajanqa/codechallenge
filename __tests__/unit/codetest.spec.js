const assert = require("assert").strict;
const codeLibrary = require("./CodeLibrary");
describe("Verify whether the passed string is palindrome or not ", () => {
  it("Verify whether the passed string with valid value is palindrome", () => {
    let strVal = 'radar';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal)
  });

  it("Verify that the given string with invalid value is palindrome", () => {
    let strVal = 'sun';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal)
  });

  it("Verify that the passed string is empty", () => {
    let strVal = '';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal);
  });

  it("Verify that the Passed string has any space", () => {
    let strVal = '  test ';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal);
  });

  it("Verify that the Passed string length is less than 3", () => {
    let strVal = 're';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal);
  });

  it("Verify that the Passed string has any special characters", () => {
    let strVal = 'civic!@#';
    let actVal = codeLibrary.isStrPalindrome(strVal);
    assert.equal(actVal, strVal);
  });
});

describe("To remove the extra whitespace from a given string", () => { 
  it("Verify that the extra white space is removed in the string", () => {
    let strVal = ' this is a first node script ';
    let expVal = 'this is a first node script';
    let actVal = codeLibrary.removeExtraWhiteSpace(strVal);
    assert.equal(actVal, expVal)
  });

  it("Verify that the passed string is empty", () => {
    let strVal = '';
    let expVal = 'this is a first node script';
    let actVal = codeLibrary.removeExtraWhiteSpace(strVal);
    assert.equal(actVal, expVal)
  });

  it("Verify that the passed string is a number ", () => {
    let strVal = '123';
    let expVal = 'this is a first node script';
    let actVal = codeLibrary.removeExtraWhiteSpace(strVal);
    assert.equal(actVal, expVal)
  });
});