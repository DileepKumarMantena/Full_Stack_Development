// var numbers2 = [1, 2, 3, 4, 5];
// var slicedArray = numbers2.slice(2); // slicedArray is [3, 4, 5]
// console.log(slicedArray)
// var numbers1 = [1, 2];
// var numbers3 = [3, 4];
// var concatenatedArray = numbers1.concat(numbers2); // concatenatedArray is [1, 2, 3, 4
// console.log(concatenatedArray)
// var number = [1, 2, 3, 4, 5];
// var index = number.indexOf(3); // index is 2
// console.log(index)



var numbersa = [1, 2, 3];


numbersa.forEach(
    function (num) 
    { 
        console.log(num); 
        if (num%2==0){
             return console.log('Even')
        }
        else {
            return console.log('Odd')
        }
    }); 
