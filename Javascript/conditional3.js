//a=0 is zero ,a>0 greater then 0 ,a<0 less then zero 

let number =2;

if (number >=0){
    console.log('Number is Equal to zero',number)
     if (number<0){ 
            console.log("Number is less then zero",number)
     }
     else if (number>0){
        console.log('number is greater then zero',number)
     }

    else {
    console.log("Number is equal to  zero",number)
    }
}
console.log('number is not equal to zero',number)


let d="Monday";

if (d=="Monday"){
    console.log('S')
}
else if (d="Tuesday") {
    console.log("Tuesday")
}

let day = "";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}