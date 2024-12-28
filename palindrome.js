const isPalindrome = (originalString) => {
    const reversedString =  reverseString(originalString);

    if(originalString == reversedString.toLowerCase()) return 'Given String is palindrome'
    
    return 'Given String is not palindrome'
};

const reverseString = (str) =>{
    let reverse = '';

    for (let value of str) {
        reverse = value + reverse;
      }

    return reverse;
};

let originalString = 'MaDam';
originalString = originalString.toLowerCase();
console.log(originalString);
console.log(isPalindrome(originalString));

console.log(originalString.split(''));
console.log(originalString.split());
console.log(originalString.split(' '));
console.log(originalString.split('').reverse());
console.log(originalString.split('').reverse().join());
console.log("ReverseString : " + originalString.split('').reverse());
console.log("ReverseString : " + originalString.split('').reverse().join(''));