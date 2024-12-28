const nonRepeatingFirstCharInStr = (str) => {
    const frequencyMap = {};

    for (const char of str) {
        frequencyMap[char] ? frequencyMap[char]++ : frequencyMap[char] = 1;
    }


let lowestValueEntry = Object.entries(frequencyMap).reduce((lowest, current) => {  
    return current[1] < lowest[1] ? current : lowest;  
});  

console.log(lowestValueEntry);

let lowestValueKey = lowestValueEntry[0]; // The key with the lowest value  
let lowestValue = lowestValueEntry[1]; // The lowest value  

console.log(`Key with the lowest value: ${lowestValueKey}`); // u  
console.log(`Lowest value: ${lowestValue}`); // 1

};
nonRepeatingFirstCharInStr('swwwiissuonu');
