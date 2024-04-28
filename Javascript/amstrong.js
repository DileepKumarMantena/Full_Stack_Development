function isAmstrong(num){
    const numstr=num.toString();
    const numDigits=numstr.length;
    let sumOfPowers=0;

    for (i=0;i<numDigits;i++){
        const digit=parseInt(numstr[i],10);
        sumOfPowers+=Math.pow(digit,numDigits)
        console.log(sumOfPowers)
    }
    return sumOfPowers===num;

}

const number=125
//153=1*3+5*3+3*3

if (isAmstrong(number)){
    console.log(number,"Is a Amstrong number")
}
else {
    console.log(number,"Not a amstrong number")
}