// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let deposits = []
  let final = []
  for (let i = 0; i < array.length; i++) {
    //console.log(array[i].deposits)
    let sum = 0
    if (!array[i].deposits) {
      deposits.push(0)
    } else {
      for (let j = 0; j < array[i].deposits.length; j++) {
        sum += array[i].deposits[j]
      }
      deposits.push(sum)
    }
  }
  for (let i = 0; i < deposits.length; i++) {
    if (deposits[i] < 2000) {
      final.push(array[i])
    }
  }
  console.log(final)
  return final
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
