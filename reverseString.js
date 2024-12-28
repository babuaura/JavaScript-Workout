const originalString = 'hello';

const reverseString = (str)=>{
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    } 

    return reverse;
}

const reversedString = reverseString(originalString); 

console.log(reversedString);