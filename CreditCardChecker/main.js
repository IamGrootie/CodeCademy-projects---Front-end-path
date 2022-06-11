// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Function to validate credit card (using Luhn Algorithm):

const validateCred = (arr) => {
    let total = 0;
    for (let i = arr.length -1; i>= 0; i--) {
        let newValue = arr[i]
        if((arr.length -1 -i)%2 === 1){
            newValue *= 2;
            if (newValue > 9) {
                newValue -= 9;
            }
        } 
        total += newValue;
    }
    return total%10 === 0;
}

// Function to find the Invalid Cards and return the invalid card numbers 

/*const findInvalidCards = (arr) => { // Initial function but improved to the uncomented one 
    let invalidCard = []
    for( let i=0; i < arr.length; i++) {
        let thisCard = arr[i];
        if(!validateCred(thisCard)){
            invalidCard.push(thisCard)
        }
    }
    return invalidCard
}*/ 
const findInvalidCards = arr => arr.filter(card => !validateCred(card));

// Function to identify the Companies of the invalid cards

const idInvalidCardCompanies = (arr) => {
    const auxArr = arr[0];
    const firstNumber = auxArr[0];
    if (firstNumber === 3) {
        return 'This Card is from Amex (American Express)'
    } else if (firstNumber === 4) {
        return 'This Card is from Visa'
    } else if (firstNumber === 5) {
        return 'This Card is from Mastercard'
    } else if (firstNumber === 6) {
        return 'This Card is from Discover'
    } else {
        return 'Company not found'
    }
}

// --------- Test section --------- //

//console.log(validateCred(valid1)); //Should print true
//console.log(validateCred(invalid1)); //Should print false
//console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
//console.log(findInvalidCards([invalid1, invalid4, invalid5])); // Should print all of the numbers of invalid Cards
//console.log(idInvalidCardCompanies([invalid3])); // Should print the company

