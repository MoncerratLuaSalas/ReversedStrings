// /**
//  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

//  For this exersise, given a string (A), print "Yes" if it is a palindrome, print "No" otherwise.

//  Constraints
//  String A will consist of at most 50 lower case english letters.

//  Stretch - configure the code so that it doesn't matter if there are uppercase letters in the string.

//  Sample Input:
//  madam

//  Sample Output:
//  Yes
//  -------------------

//  Sample Input:
//  tiger

//  Sample Output:
//  No
//  -------------------

//  Stretch Sample Input:
//  Racecar

//  Stretch Sample Output:
//  Yes

//  */


// function reversedString(A){

    

// }

// reversedString("madam");//Yes
// reversedString("tiger");//No

function reversedString(A) {
    // No longer case sensitive
    const lowerCaseString = A.toLowerCase();
    
    // Reverse the string
    const reversedString = lowerCaseString.split('').reverse().join('');
    
    // Checking if string is the same reversed
    if (lowerCaseString === reversedString) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Test cases
reversedString("madam"); 
reversedString("tiger"); 
reversedString("Racecar");
