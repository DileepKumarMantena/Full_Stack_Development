// function palindrome(str){
//     let rev =str.split("").reverse().join("");
//     if (rev == str){
//         return "It is a Palindrome "
//     }
//     else {
//         return "It is not a palindrome"
//     }
// }

// let str1="madam"
// let str2='Welcome'
// console.log(palindrome(str1))
// console.log(palindrome(str2))

// let str3= "This is js"
// console.log(str3.split("").reverse().join(""))
// console.log(str3.split("").reverse())

// // 153 = 1*3+5*+3*3

// console.log((1+125+27))

function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(2024));
  console.log(isLeapYear(2023));