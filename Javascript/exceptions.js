// console.log('jjjj')
// function testOdd(x) {
//     try {
        
//       if (x % 2 === 0) {

//         console.log("The number is even");
//       }
//       else console.log("The number is odd");
  
//     }
//     catch (error) {
//         //   if (!Number.isInteger(x)) {
            
//         console.log("Not an integer!")
      
//     }
//     finally {
//       console.log("this function is to check oddoreven")
//     }
    
//   }


// console.log(oddOrEven(24))
//   console.log(oddOrEven(25))
//   console.log(oddOrEven("react"))
  
function checkPalindrome(str) {
    
    try {
      if (checkPalindrome(str.split('').reverse().join(''))) {
        console.log("this string is palindrome")
      }
      else console.log(str," is not palindrome")
      
    } catch (str) {
      console.log(str," is not palindrome")
    }
    finally {
      return (str)
    }
    
}
  
function checkPalindrome(str) {
    return checkPalindrome
  }
  
//   if (checkPalindrome() == str) {
//     console.log(str, "this string is palindrome")
//   }
//   else { console.log(str, "is not palindrome") }
  
  console.log(checkPalindrome('Madam'))
  console.log(checkPalindrome('mom'))
  console.log(checkPalindrome('string'))