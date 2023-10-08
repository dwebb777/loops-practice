// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let deposits = []
  let overOneHundred = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits) {
      deposits.push(array[i].deposits)
    } else {
      deposits.push(0)
    }
  }
  for (let i = 0; i < deposits.length; i++) {
    for (let j = 0; j < deposits[i].length; j++) {
      if (deposits[i][j] > 100) {
        overOneHundred.push(deposits[i][j])
      } else {
        continue
      }
    }
  }
  console.log(overOneHundred)
  return overOneHundred
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
