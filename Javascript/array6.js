// let oddArray = []
// let evenArray= []
//   for (i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//       evenArray.push(i)
//     }
//     else oddArray.push(i);
// }
// console.log("odd Numbers:", oddArray)
// console.log("even Numbers:", evenArray)


let a = [1, 8, 7, 9, 1]


// const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

// console.log(hasDuplicates(a))

let  Duplicates=[]
for ( num in a ){
    for (num2 in a){
        if (num==num2){
            continue;
        }
        else {
            if(a[num]== a[num2]){
                Duplicates.push(a[num])
            }
        }
        
        }
    }
    return [new Set(Duplicates)];




