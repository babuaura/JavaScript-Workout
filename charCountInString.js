const countCharInString = (originalString) => {
    const countChar = {};
    
    // for-of
    // for(let str of originalString) {
    //     if(countChar[str]) countChar[str]++;
    //     else countChar[str] = 1;     
    // }    

    // forEach
    originalString.split('').forEach(element => {
        //countChar[element] = (countChar[element] || 0) +1;
        if(countChar[element]) countChar[element]++;
        else countChar[element] = 1;
    });
    return countChar;
}

let originalString = 'madamdfareq';
console.log(countCharInString(originalString));

// Reduce
const result = originalString.split('').reduce((charCount, currentElement)=>{

    charCount[currentElement] ? charCount[currentElement]++ : charCount[currentElement] = 1;
    
    return charCount;
}, {});
console.log("reduce");
console.log(result);