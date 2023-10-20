// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrong = []
  for (let i = 0; i < array.length; i++) {
    let sumOfDep = 0
    if (!array[i].deposits) {
      array[i].deposits = 0
    } else {
      //console.log(array[i].deposits)
      for (let j = 0; j < array[i].deposits.length; j++) {
        sumOfDep += array[i].deposits[j]
      }
    }
    //console.log("Sum of deposits: ", sumOfDep)

    let sumOfWith = 0
    if (!array[i].withdrawals) {
      array[i].withdrawals = 0
    } else {
      for (let m = 0; m < array[i].withdrawals.length; m++) {
        sumOfWith += array[i].withdrawals[m]
      }
      //console.log("Sum of withdrawals: ", sumOfWith)
    }
    if (array[i].balance == sumOfDep - sumOfWith || array[i].balance == sumOfDep) {
      continue
    } else {
      wrong.push(array[i])
    }
  }
  return wrong
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
